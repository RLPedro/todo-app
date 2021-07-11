import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                checked: false
            };
            state.push(newTodo);
        },
        checkToggler: (state, action) => {
            state.map(todo => { if(todo.id === action.payload.id) todo.checked = !todo.checked })
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        },
    }
})

export const { addTodo, checkToggler, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;