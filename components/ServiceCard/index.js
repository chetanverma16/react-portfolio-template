import React from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description, dark }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:bg-slate-50 hover:scale-105 cursor-pointer`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>
    </div>
  );
};

export default ServiceCard;
