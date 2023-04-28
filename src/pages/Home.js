import React, { useState } from "react";
import Heading from "../components/Heading";
import Todo from "../components/Todo";
import Todos from "../components/Todos";
import { useSelector } from "react-redux";

const Home = () => {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos.items);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Heading title=" Add your todos !" />
      <Todo {...{ title, setTitle }} />
      <Todos todos={todos} setTitle={setTitle} />
    </div>
  );
};

export default Home;
