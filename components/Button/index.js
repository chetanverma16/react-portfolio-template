import React from "react";

const Button = ({ children, type, onClick }) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        className="mob:text-sm laptop:text-base p-2 mob:p-1 laptop:p-2 m-2 mob:m-1 laptop:m-2 rounded-lg text-white bg-sky-400 hover:bg-sky-600 first:ml-0">
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className="mob:text-sm laptop:text-base p-2 mob:p-1 laptop:p-2 m-2 mob:m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100  first:ml-0">
      {children}
    </button>
  );
};

export default Button;
