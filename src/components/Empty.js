import React from "react";
import { MdCelebration } from "react-icons/md";

const Empty = () => {
  return (
    <div className="flex justify-center items-center gap-3 text-purple-900 text-2xl h-[70vh]">
      <MdCelebration className="text-3xl" />
      <span>Yeah Nothing to do... </span>
    </div>
  );
};

export default Empty;
