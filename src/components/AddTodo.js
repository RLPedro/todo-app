import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/todoSlice';

export default AddTodo =  () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [validationMessage, setValidationMessage] = useState(false);

    
    const onSubmit = e => {
        e.preventDefault();
    
        if (!title || !description) {
          setValidationMessage(true);
          return;
        }
    
        dispatch(addTodo({ 
            title, 
            description
        }));

        setTitle('');
        setDescription('');
        setValidationMessage(false);
      };

    return (
        <>
      <form onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">add a new To-Do</legend>
        <label htmlFor="form__title-input" className="form__add-title">title:</label>
        <br/>
        <input type="text"
          autoComplete="off"
          id="form__title-input"
          placeholder="Enter a title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          /><br/>
        <label htmlFor="form__description-input" className="form__add-description">description:</label>
        <br/>
        <input type="text"
          autoComplete="off"
          id="form__description-input"
          placeholder="Enter a description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          /><br/>
        <input type="submit" id="form__add-button" value="ADD" />
        </fieldset>
      </form>
  
      { validationMessage && <h2 className="validation-message">
          Please add a title and a description for your to-do!</h2> }
    </>
    );
  }
  