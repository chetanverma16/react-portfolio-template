import React, { useEffect, useRef, useState } from "react";

const SomeSkills = ({ iconUrl, title, paragraph, tags, relatedProjects }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = cardRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 0.4) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row items-center md:items-start mb-10 transition-all duration-500 ease-out transform ${
        isVisible ? "opacity-100 scale-105" : "opacity-0 scale-100"
      }`}
    >
      <div className="w-28 h-28 md:w-2 md:h-24 mr-6 md:mr-8 ">
        <img src={iconUrl} alt="icon" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 skills-related-projects-div">
        <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>

        <p className="skills-paragraph-center text-gray-500 mb-6">
          {paragraph}
        </p>
        <ul className="flex  flex-wrap ">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="skills-li-items mr-2 mb-2 px- py-   text-md"
            >
              {tag}
            </li>
          ))}
        </ul>
        {relatedProjects && relatedProjects.length > 0 && (
          <>
            <h3 className="text-lg font-bold mb-2 mt-6">Related Projects:</h3>
            <div className="some-skills-projects-container  mt-4">
              {relatedProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target={"blank"}
                  rel={"norefferrer"}
                  className="some-skills-project-cards relative md:w-80 md:h-80 mr-6 md:mr-8 mb-8 md:mb-0 rounded-xl overflow-hidden transition-all duration-500 ease-out transform hover:-translate-y-1 hover:shadow-xl"
                >
                  {/*  // eslint-disable-next-line @next/next/no-img-element 
                 <svg className="w-16 h-16 md:w-24 md:h-24 mr-6 md:mr-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                 <path d="M50 5 l40 23 v44 l-40 23 l-40 -23 v-44 z" stroke="currentColor" fill="none" stroke-width="2" />
                 </svg>
             
             */}
                  {/*  <img
                src={project.iconUrl}
                alt="related project icon"
                className="absolute top-0 left-0 w-full h-full object-cover"
              
            
                
              /> */}
                  <svg className="svg-size absolute top-2 left-4 md:w-24 md:h-24 mr-6 md:mr-8">
                    {project.iconSVG}
                  </svg>
                  <div className="absolute bottom-20 left-0 w-full h-24  px-4 py-2">
                    {/* bg-gradient-to-t from-red-700 via-gray-800 to-gray-900 opacity-90 */}
                    <h3 className="some-skills-project-cards-title text-lg font-medium mb-1">
                      {project.title}
                    </h3>

                    <p className="some-skills-project-desc text-gray-500">
                      {project.description}
                    </p>

                    <div className="cats-flex-wrap flex flex-wrap">
                      <p className="some-skills-project-cats text-md text-gray-400">
                        {project.category}
                      </p>
                      <p className="some-skills-project-cats text-md text-gray-400">
                        {project.category2}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SomeSkills;



