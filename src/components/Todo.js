import React from "react";
import { GrAdd } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const Todo = ({ title, setTitle }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title !== "") {
      dispatch(addTodo({ title }));
      setTitle("");
    }
  };

  const onPress = (event) => {
    if (event.key === "Enter" && title !== "") {
      handleAdd();
    }
  };
  return (
    <div className="flex items-center justify-center h-8 w-full px-12">
      <input
        value={title}
        placeholder="Add your todos..."
        type="text"
        className="px-2 border outline-none h-full w-full"
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={onPress}
      />
      <button
        onClick={handleAdd}
        className=" bg-gray-400 border text-white px-3 h-full"
      >
        <GrAdd className="text-white" />
      </button>
    </div>
  );
};

export default Todo;
