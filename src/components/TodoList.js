import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

export default TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <div className='todos-container'>
      {todos.map(todo => (
      <Todo key={todo.id} todo={todo}/>
      ))}
    </div>
  );
}