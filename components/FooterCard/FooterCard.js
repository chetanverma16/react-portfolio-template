import React from "react";
import Image from "next/image";
import reactIcon from "/public/images/react.png";
import nextJS from "/public/images/next.png";
import tailwindCSS from "/public/images/wind.png";

import GithubContributors from "../GithubContributors/GithubContributors";

/* for styles go to styles/global.css  */
const FooterCard = () => {
  return (
    <div className="footer-bg-box rounded-lg shadow-lg p-8">
      <div className="footer-elements-box ">
        {" "}
        {/* all elements >> flex flex col mobile */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Built with</h2>
          <div className="flex footer-techstacks-box justify-center items-center">
            <div className="react-js">
              <p>React JS</p>
              <Image
                src={reactIcon}
                alt="Collaboration Icon 1"
                className="w-16 h-16  shadow-md"
                width={50}
                height={50}
              />
            </div>
            <div className="react-js">
              <p>Next JS</p>
              <Image
                src={nextJS}
                alt="Collaboration Icon 1"
                className="w-32 h-32 shadow-md"
                width={50}
                height={50}
              />
            </div>
            <div className="react-js">
              <p>Tailwind</p>
              <Image
                src={tailwindCSS}
                alt="Collaboration Icon 1"
                className="w-16 h-16 shadow-md"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="built-by-box flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Developer/s</h2>
          <div className="flex testb  justify-center items-center">
            <a
              className="versions-box"
              href="https://github.com/chetanverma16"
              target={"_blank"}
              rel="noreferrer"
            >
              {/* before versins developer image*/}
              <p>Chetan V</p>

              <p className="before-p">V:1-3 </p>
            </a>

            {/* after versions developer image */}
            <a
              className="versions-box"
              href="  https://github.com/faradeen-ja"
              target={"_blank"}
              rel="noreferrer"
            >
              <p className="text-center">FJ</p>

              <p className="after-p">V:4</p>
            </a>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Collaborators</h2>
          <div className="flex justify-center items-center">
            {/* for static images*/}

            {/*     <Image
            src={dev1Image}
            alt="Collaboration Icon 4"
            className="w-16 h-16 mr-4 rounded-full shadow-md"
            width={50}
            height={50}
          />
          <Image
            src={dev1Image}
            alt="Collaboration Icon 5"
            className="w-16 h-16 rounded-full shadow-md"
            width={50}
            height={50}
          /> */}

            {/* fetching contributons from Github using gitup api components/GithubContributors*/}
            {/*   <div className="App">
      <GithubContributors owner="chetanverma16" repo="react-portfolio-template" />
    </div> */}
          </div>
        </div>
      </div>
      <div className="footer-text-box">
        <p className="footer-text text-gray-700 text-small text-center mb-8">
          Collaboration is crucial because building complex software projects
          and products usually requires input and effort from multiple
          individuals with different skill sets, backgrounds, and perspectives.
          This diversity of thought and expertise leads to the development of
          better and more efficient systems.
        </p>
        <p className="text-gray-700 text-small text-center">
          This project is free to use and modify under the terms of the MIT
          license. Please credit the developers by adding a link to their
          profiles:
          {/*I want to express my gratitude to Chetan Verma for their invaluable contributions to this project. Without their expertise and guidance, My work on Version 4.0 of this portfolio would not exist.
         I am proud to have collaborated with Chetan and the other contributors to elevate the design and provide a comprehensive 360-degree view of the project.
        If you are including a list of credits for this project, I would be honored to be included as a developer and contributor. Please feel free to acknowledge my contributions in the appropriate manner.*/}
          <a
            href="https://github.com/chetanverma16"
            className="underline  ml-1"
          >
            Chetan V
          </a>
          <a href="https://github.com/faradeen-ja" className="underline ml-1">
            FJ
          </a>
        </p>
      </div>

      {/*Please be sure to give proper attribution to the developers and contributors by including a footer card component in your portfolio. If you choose to modify or remove the component,
       please consider leaving a link to the developer's above GitHub profile address in the footer area. This will help to acknowledge and recognize the hard work and contributions of those who have 
       helped to create and maintain the component. Thank you for your consideration!*/}
    </div>
  );
};

export default FooterCard;
