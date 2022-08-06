import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';
// import { useSelector } from 'react-redux/es/exports';
const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTodos())
    },[])
    return (
        <div>
            <h1>Welcome to React Redux Todo App</h1>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            <section>
                {
                    todos && todos.map((todo) => {
                        return <article>
                            <h4>{todo.id}</h4>
                            <h3>{ todo.title}</h3>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default Todos;