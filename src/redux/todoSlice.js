import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        title: "todo1",
        completed: false,
        time: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "todo2",
        completed: false,
        time: new Date().toLocaleString(),
      },
      {
        id: 3,
        title: "todo3",
        completed: true,
        time: new Date().toLocaleString(),
      },
    ],
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
    },
    toggleComplete: (state, action) => {
      const checkId = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[checkId].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      const index = state.items.findIndex((todo) => todo.id === action.payload);
      state.items.splice(index, 1);
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
