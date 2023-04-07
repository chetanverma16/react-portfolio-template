/* eslint-disable @next/next/no-img-element */

import React from "react";
import { useState } from "react";

const WorkCard = ({ img, name, description, onClick, tags }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="relative project-box overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
        <div
          className="relative project-box-flex rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
          style={{ height: "500px" }}
        >
          <img
            onClick={
              onClick
            } /* moved onclick for project here for better accessibility and the  descreption card addition */
            alt={name}
            className="h-full w-full object-cover transition-all ease-out duration-300 hover:scale-110 "
            src={img}
          ></img>

          <div className="flex flex-col  justify-center items-center /* yay:P! */">
            <div className="project-deets">
              <h1 className=" mt-2 px-1  text-2xl font-medium">
                {name ? name : "Project Name"}
              </h1>

              <h2
                className={`project-paragraph mt-3 px-1 text-md opacity-50 ${
                  showMore ? "h-auto" : "h-20 overflow-hidden"
                }`}
              >
                {description ? description : "Description"}
              </h2>
              {description && description.length > 100 && (
                <button
                  className="see-more project-card-btns mt-3 px-5 text-md font-bold focus:outline-none"
                  onClick={toggleShowMore}
                >
                  {showMore ? "See Less" : "See More"}
                </button>
              )}

              <button
                className=" see-project project-card-btns mt-3 ml-8 px-5  text-md font-bold focus:outline-none"
                onClick={onClick}
              >
                See Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
