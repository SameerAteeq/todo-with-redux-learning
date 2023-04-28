import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-purple-800 p-3 ">
      <span
        onClick={() => navigate("/")}
        className="text-2xl text-white font-semibold cursor-pointer"
      >
        TodoApp
      </span>
    </div>
  );
};

export default Navbar;
