import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo.js';

import { useSelector } from 'react-redux';

const App = () => {
    const todos = useSelector(state => state.todos);

    return (
        <div className="app">
            <Header />
            <AddTodo/>
            {todos.length > 0 ? <TodoList /> : <p className="no-todos-message">No To-Do's added yet!</p> }
        </div>
    );
};

export default App;
