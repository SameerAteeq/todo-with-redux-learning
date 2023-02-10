import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleComplete } from "../redux/todoSlice";
import TodoItem from "./TodoItem";

const Todos = ({ editTodo, deleteTodo, todos, todo, setTodo }) => {
  return (
    <div>
      {todos?.map((item) => (
        <div key={item.id}>
          <TodoItem data={item} {...{ editTodo, deleteTodo, todo, setTodo }} />
        </div>
      ))}
    </div>
  );
};

export default Todos;
