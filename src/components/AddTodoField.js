import React, { useState } from "react";
import Todos from "./Todos";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoField = () => {
  const totalItems = useSelector((state) => state.todos?.items?.length);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: todo,
      })
    );
    setTodo("");
  };
  const handleEdit = (id, text) => {
    console.log(text);
    setTodo(text);
  };
  return (
    <div className="d-flex justify-center items-center flex-row w-full">
      <form onSubmit={handleSubmit}>
        <input
          className="border-2"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <Todos todo={todo} setTodo={setTodo} editTodo={handleEdit} />
      <h1>Total Items: ${totalItems}</h1>
    </div>
  );
};

export default AddTodoField;
