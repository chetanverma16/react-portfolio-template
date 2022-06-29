import React from "react";

const ContentSection = ({ content }) => {
  return (
    <div
      className="markdown-class"
      dangerouslySetInnerHTML={{ __html: content }}></div>
  );
};

export default ContentSection;
