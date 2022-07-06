import React from "react";
import NavLinks from "./NavLinks";
import classes from "./Navbar.module.css";

function Navigation() {
  return (
    <nav className={classes.Navigation}>
      <NavLinks />
    </nav>
  );
}

export default Navigation;
