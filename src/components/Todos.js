import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { deleteTodo, editTodo, toggleComplete } from "../redux/todoSlice";
import Empty from "./Empty";

const Todos = ({ todos }) => {
  const [editTodoId, setEditTodoId] = useState(null);
  const [updateTodo, setUpdateTodo] = useState("");
  const dispatch = useDispatch();
  const handleDel = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, title) => {
    setEditTodoId(id);
    setUpdateTodo(title);
  };

  const update = (id) => {
    dispatch(editTodo({ id, title: updateTodo }));
    setEditTodoId(null);
  };

  const handleChange = (e, id) => {
    dispatch(toggleComplete({ id, completed: e.target.checked }));
  };
  return (
    <>
      {todos?.length > 0 ? (
        <ul className="w-full px-6">
          {todos?.map((item, i) => (
            <li key={i} className="text-xl">
              {editTodoId === item?.id ? (
                <div className="flex my-3 gap-3">
                  <input
                    className="border outline-none px-2 w-full"
                    value={updateTodo}
                    onChange={(e) => setUpdateTodo(e.target.value)}
                  />

                  <div className="flex gap-2">
                    <button onClick={() => update(item?.id)}>
                      <IoMdDoneAll className="text-xl text-green-700" />
                    </button>
                    <button onClick={() => setEditTodoId(null)}>
                      <ImCancelCircle className="text-xl text-red-700" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between mb-4">
                  <div className="flex gap-2 items-center">
                    <input
                      onChange={(e) => handleChange(e, item.id)}
                      type="checkbox"
                      className="text-2xl  accent-purple-900 checked:bg-purple-700 form-checkbox-checked:text-blue-900"
                      checked={item?.completed}
                    />

                    <span
                      className={`${
                        item?.completed ? "line-through line-through-thick" : ""
                      }`}
                    >
                      {item?.title}
                    </span>
                  </div>

                  <div>
                    <button onClick={() => handleEdit(item?.id, item?.title)}>
                      <FiEdit className="text-xl text-green-700" />
                    </button>
                    <button onClick={() => handleDel(item?.id)}>
                      <AiFillDelete className="text-xl text-red-700" />
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Todos;
