import Button from "../Button";
import React from "react";
import classes from "./Navbar.module.css";

const NavLinks = (handleWorkScroll, handleAboutScroll) => {
  function callprop() {
    props.isMobile && props.closeMobileMenu();
  }
  return (
    <div className="flex">
      <Button className="li" onClick={({ handleWorkScroll }, { callprop })}>
        Work
      </Button>
      <Button className="li" onClick={({ handleAboutScroll }, { callprop })}>
        About
      </Button>
      <Button
        className="li"
        onClick={(() => router.push("/blog"), { callprop })}
      >
        Blog
      </Button>
      <Button
        className="li"
        onClick={
          (() => window.open("mailto:hello@chetanverma.com"), { callprop })
        }
      >
        Contact
      </Button>
    </div>
  );
};

export default NavLinks;
