import React from "react";

const WorkCard = ({ img, name, description, readme, onClick }) => {
  return (
    <div
      className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0"
      onClick={onClick}>
      <div
        className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48"
        style={{ height: "600px" }}> 
        {/* 600px is the original setting */}
        <img alt={name} className="h-full w-full object-cover" src={img}></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-70">
        {description ? description : "Description"}
      </h2>
      {/* <p className="opacity-70">
        {info ? info : "Info"}
      </p> */}
    </div>
  );
};

export default WorkCard;
