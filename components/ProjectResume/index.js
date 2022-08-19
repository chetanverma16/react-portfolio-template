import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  return (
    <div className="mt-5 flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div>
        <h2 className="text-lg font-bold">{position}</h2>
        {bullets && bullets.length > 0 && (
          <ul className="list-disc">
            {bullets.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
