import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
    totalItems: 0,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        time: new Date().toLocaleString(),
        completed: false,
      };
      state.items.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.items));
    },

    toggleComplete: (state, action) => {
      const checkId = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[checkId].completed = action.payload.completed;
      localStorage.setItem("todos", JSON.stringify(state.items));
    },

    deleteTodo: (state, action) => {
      const index = state.items.findIndex((todo) => todo.id === action.payload);
      state.items.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    // editTodo: (state, action) => {
    //   return state.items.map((todo) => {
    //     if (todo.id === action.payload) {
    //       return {
    //         ...todo,
    //         title: action.payload.title,
    //       };
    //     }
    //   });
    // },
    editTodo: (state, action) => {
      const checkItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[checkItem] = {
        ...state.items[checkItem],
        title: action.payload.title,
        time: new Date().toLocaleString(),
      };
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    // editTodo: (state, action) => {
    //   const checkItem = state.items.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   return {
    //     ...state,
    //     items: [
    //       ...state.items.slice(0, checkItem),
    //       {
    //         ...state.items[checkItem],
    //         title: action.payload.title,
    //       },
    //       ...state.items.slice(checkItem + 1),
    //     ],
    //   };
    // },
  },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
