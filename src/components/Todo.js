import React from 'react';

import { useDispatch } from 'react-redux';
import { checkToggler, removeTodo } from '../redux/todoSlice'

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleCheck = () => {
      dispatch(checkToggler(todo));
  }

  const handleDelete = () => {
    dispatch(removeTodo(todo));
}

  return (
    <div className={`todo ${todo.checked && 'todo--checked'}`} onClick={() => handleCheck()}>
            <div className="todo__card"
              style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
            <h2 className="todo__title">{todo.title}</h2>
            <p className="todo__description">{todo.description}</p>
            </div>
            <button className='todo__remove-button'
                style={{ display: todo.checked ? 'inline' : 'none' }}
                onClick={() => handleDelete()}>remove</button>
    </div>
  );
}