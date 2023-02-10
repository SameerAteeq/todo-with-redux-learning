import { format } from "date-fns";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleComplete, editTodo } from "../redux/todoSlice";

const TodoItem = ({ data, deleteTodo }) => {
  const { id, title, completed, time } = data;
  const [isEditing, setIsEditing] = useState(false);
  const [todoValue, setTodoValue] = useState(title);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleEditTodo = (id, newTitle) => {
    dispatch(editTodo({ id, title: newTitle }));
    setIsEditing(false);
  };

  const handleTodoValueChange = (e) => {
    setTodoValue(e.target.value);
  };

  return (
    <div className="d-flex items-center justify-between ">
      {isEditing ? (
        <div className="d-flex items-center gap-6">
          <input
            type="text"
            value={todoValue}
            onChange={handleTodoValueChange}
          />
          <button onClick={() => handleEditTodo(id, todoValue)}>Save</button>
        </div>
      ) : (
        <div className="d-flex items-center gap-6">
          <input type="checkbox" checked={completed} onChange={handleClick} />
          <h6 className={`${completed ? "line-through" : ""}`}>{title}</h6>
          <p> {format(new Date(time), "p, MM/dd/yyyy")}</p>
        </div>
      )}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
