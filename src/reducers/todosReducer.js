// const todosReducer = (todos = [], action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [...todos, action.payload];
//         case 'REMOVE_TODO':
//             return todos.filter(todo => todo.id !== action.payload.id);
//         case 'CHECK_TODO':
//             return todos.map(todo => {
//                 if (todo.id === action.payload.id) return { ...todo, checked: !todo.checked }
//             });
//         default: return todos;
//     }
// };

// export default todosReducer;