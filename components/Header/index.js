import React from "react";
import Button from "../Button";
const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  return (
    <div className="mt-6 flex items-center justify-between sticky top-0 z-10 bg-white">
      <h1 className="font-medium">Portfolio.</h1>
      <div>
        <Button onClick={handleWorkScroll}>Work</Button>
        <Button onClick={handleAboutScroll}>About</Button>
        <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Header;
