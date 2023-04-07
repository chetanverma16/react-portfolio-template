import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

/* optimized -
you can search pre-indexed data in portfolio  */
import SearchMe from "../Search/Search";

const Header = ({
  handleSkillsScroll,
  handleCollabScroll,
  handleWorkScroll,
  handleAboutScroll,
  isBlog,
}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0 ">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link search-header-mobile  "
              >
                {name}.
                {/* an interacive portfolio search function,  styles in css module file */}
              </h1>

              {/* STYLES IN GLOBAL.CSS */}
              {/* SEARCH ICON SVG, CAN BE ALSO REFACTORED TO USE DYNAMIC SVG IMPORT */}
              <div className=" search-svg flex">
                <svg
                  id="Flat"
                  height="45"
                  viewBox="0 0 16 16"
                  width="45"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <linearGradient
                    id="New_Gradient_Swatch"
                    gradientUnits="userSpaceOnUse"
                    x1="1.233"
                    x2="14.768"
                    y1="1.233"
                    y2="14.768"
                  >
                    <stop offset="0" stopColor="#1283ff" />
                    <stop offset="1" stopColor="#d21aff" />
                  </linearGradient>
                  <path
                    d="m9.2656 9.2682a2.6231 2.6231 0 1 1 .0026-.0027l-.0016.0011zm6.2344-6.2682v10a2.5009 2.5009 0 0 1 -2.5 2.5h-10a2.5009 2.5009 0 0 1 -2.5-2.5v-10a2.5009 2.5009 0 0 1 2.5-2.5h10a2.5009 2.5009 0 0 1 2.5 2.5zm-3.6465 8.1465-1.56-1.56a3.4662 3.4662 0 0 0 .7065-2.0865 3.5 3.5 0 1 0 -3.5 3.5 3.4662 3.4662 0 0 0 2.0863-.7067l1.56 1.56a.5.5 0 0 0 .707-.707z"
                    fill="url(#New_Gradient_Swatch)"
                  />
                </svg>
                <SearchMe /> {/*file: components/Search.js */}
              </div>

              <div className="flex items-center ">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`popover-style absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1  ">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {/* optimized contents UI */}
                  <Button onClick={handleSkillsScroll}>Skills360°</Button>
                  <Button onClick={handleCollabScroll}>Collabs360°</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => window.open("mailto:faradeen@outlook.com")}
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:faradeen@outlook.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:faradeen@outlook.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div
        className={`mt-10 hidden flex-row items-center  header-box  sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        {/*desktop optimized-h1 flex  justify-around includes search bar  /add */}
        <h1
          onClick={() => router.push("/")}
          className=" flex text-2xl  cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>

        {/* STYLES IN GLOBAL.CSS */}
        {/* SEARCH ICON SVG, CAN BE ALSO REFACTORED TO USE DYNAMIC SVG IMPORT */}
        <div className="search-desktop-positioning search-svg flex">
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            height="45"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 134 134"
            width="44"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient
              id="_Linear1"
              gradientUnits="userSpaceOnUse"
              x1="12.5"
              x2="120.833"
              y1="66.654"
              y2="66.654"
            >
              <stop offset="0" stopColor="#8700ff" />
              <stop offset="1" stopColor="#8aeaff" />
            </linearGradient>
            <g id="layer1">
              <path
                d="m120.833 39.571c0-14.948-12.135-27.083-27.083-27.083h-54.167c-14.947 0-27.083 12.135-27.083 27.083v54.167c0 14.947 12.136 27.083 27.083 27.083h54.167c14.948 0 27.083-12.136 27.083-27.083z"
                fill="url(#_Linear1)"
              />
              <path
                id="path1058"
                d="m60.911 29.167c-17.485 0-31.744 14.259-31.744 31.744s14.259 31.715 31.744 31.715c7.702 0 14.769-2.77 20.27-7.355l18.047 18.046c.541.544 1.277.85 2.044.85s1.504-.306 2.045-.85c.544-.541.85-1.278.85-2.045s-.306-1.503-.85-2.044l-18.046-18.047c4.585-5.501 7.355-12.568 7.355-20.27 0-17.485-14.23-31.744-31.715-31.744zm0 5.773c14.368 0 25.948 11.603 25.948 25.971s-11.58 25.948-25.948 25.948-25.971-11.58-25.971-25.948 11.603-25.971 25.971-25.971z"
                fill="#fff"
                fillRule="nonzero"
              />
            </g>
          </svg>
          <SearchMe /> {/*file: components/Search.js */}
        </div>

        {!isBlog ? (
          <div className="flex  ">
            <Button onClick={handleWorkScroll}>Work</Button>
            {/* <Button onClick={handleAboutScroll}>About</Button> */}
            {/* optimized contents UI */}
            <Button onClick={handleSkillsScroll}>Skills360</Button>
            <Button onClick={handleCollabScroll}>Collabs360</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:faradeen@outlook.com")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:faradeen@outlook.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
