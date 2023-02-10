import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodoField from "./components/AddTodoField";
import PageTitle from "./components/PageTitle";
import Todos from "./components/Todos";
import { deleteTodo, editTodo } from "./redux/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleEdit = (id, text) => {
    dispatch(
      editTodo({
        id: id,
        title: text,
      })
    );
  };
  return (
    <div className="w-full h-full d-flex justify-center items-center max-w-[600px]">
      <PageTitle>Todo App</PageTitle>
      <AddTodoField />
      <Todos editTodo={handleEdit} deleteTodo={handleDelete} todos={todos} />
    </div>
  );
}

export default App;
