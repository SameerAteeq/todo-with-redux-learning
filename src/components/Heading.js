import React from "react";

const Heading = ({ title }) => {
  return (
    <h1 className="text-3xl text-purple-800 text-center font-bold capitalize mt-4">
      {title}
    </h1>
  );
};

export default Heading;
