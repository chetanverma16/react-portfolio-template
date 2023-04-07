import React from "react";
import Button from "../Button";
import RepoForks from "../RepoForks/RepoForks";
import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div
      className={`${className} flex all-scocial-align-center flex-wrap mob:flex-nowrap link`}
    >
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}

      <div className="repo-fork">
        <RepoForks repository="faradeen-ja/v4-0223" />
      </div>
    </div>
  );
};

export default Socials;
