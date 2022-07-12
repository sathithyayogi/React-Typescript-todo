import React, { useEffect, useState, useRef } from 'react'
import { Todo } from './model'
import { AiFillEdit, AiFillDelete, AiFillCheckCircle } from 'react-icons/ai';
import './style.css'

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (todoId: number) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
            })
        )
    }
    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((todo) => {
                return todo.id !== id
            })
        )
    }

    const handleEdit = (e:React.FormEvent<HTMLFormElement>, todoId:number)=> {
        e.preventDefault();

        setTodos(
            todos.map((todo)=>(todo.id === todoId ? {...todo, todo:editTodo}:todo))
        );

        setEdit(false);
    }

    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])

    return (
        <form onSubmit={(e) =>{
            handleEdit(e, todo.id)
        }} 
        className='todos__single'>
            {
                edit ? (
                    <input value={editTodo}
                    ref={inputRef}
                    className='todo__single--test'
                        onChange={(e) => {
                            setEditTodo(e.target.value);
                        }}
                    />
                ) : (
                    todo.isDone ? (
                        <s className='todos__single--text'>
                            {todo.todo}
                        </s>
                    ) : (
                        <span className='todos__single--text'>
                            {todo.todo}
                        </span>
                    )
                )
            }


            <div >
                <span className='icon'
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    <AiFillEdit />
                </span>
                <span className='icon' onClick={() => {
                    handleDelete(todo.id);
                }}>
                    <AiFillDelete />
                </span>
                <span className='icon' onClick={() => {
                    handleDone(todo.id);
                }}>
                    <AiFillCheckCircle />
                </span>
            </div>
        </form>
    )
}

export { SingleTodo }