import NavLinks from "./NavLinks";
import classes from "./Navbar.module.css";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <MdOutlineMenu
      className={classes.Hamburger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <IoClose
      className={classes.Hamburger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}

      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
