import React from 'react'
import { Todo } from './model'
import { SingleTodo } from './SingleTodo'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        // <div className='todos'>
        //     {
        //         todos.map((data) => (
        //             <SingleTodo key={data.id} todo={data} todos={todos} setTodos={setTodos}  />
        //         ))
        //     }
        // </div>

        <div className='container'>
            <div className="todos">
                <span className="todos__heading">
                    Active Tasks
                </span>

                {
                    todos.map((data) => (
                        <SingleTodo key={data.id} todo={data} todos={todos} setTodos={setTodos} />
                    ))
                }

            </div>
            <div className='todos remove'>
            <span className="todos__heading">
                    Completed Tasks
                </span>

                {
                    todos.map((data) => (
                        <SingleTodo key={data.id} todo={data} todos={todos} setTodos={setTodos} />
                    ))
                }
            </div>
        </div>
    )
}

export { TodoList }