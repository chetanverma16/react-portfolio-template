import React from "react";
import Button from "../Button";

import data from "../../yourData";
import yourData from "../../yourData";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex`}>
      {yourData.socials.map((social) => (
        <Button onClick={() => window.open(social.link)}>{social.title}</Button>
      ))}
    </div>
  );
};

export default Socials;
