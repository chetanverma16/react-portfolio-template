import React, { useState, useEffect } from "react";

/* styles in styles/global.css */
/* adding selected work feature, easy access to top projects */

const SelectedWork = ({ selectedWorks }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  /* load handler for selected work title on page load = animate */
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    /* load handler for selected work title on page load = animate */

    <div className="selected-work-container">
      {/* selecetedWork */}
      <div className={`vector-text${loaded ? " loaded" : ""}`}>
        <h1 className=" selected-work-title   text-5xl font-bold text-center  ">
          Selected Work
        </h1>
      </div>
      {/* end */}

      <div
        className="selected-work-wrapper flex overflow-x-auto overflow-y-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {selectedWorks.map((work) => (
          <a
            key={work.id}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-b from-${work.gradientFrom}-500 to-${work.gradientTo}-500 a-transition-x a-scale rounded-lg  flex-none w-64 md:w-80 mr-4 py-6 px-4 transform scale-100`}
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <h3
              className={`gradient-text  text-${work.textStyle} text-3xl font-bold mb-2`}
            >
              {work.title}
            </h3>
            <p className={`text-${work.textStyle} text-sm`}>
              {work.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SelectedWork;
