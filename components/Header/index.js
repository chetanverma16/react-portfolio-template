import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";
import { Popover } from "@headlessui/react";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  return (
    <>
      <Popover className="mob:block tablet:hidden mt-5 flex">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between mob:p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium cursor-pointer mob:p-2 laptop:p-0">
                {data.name}.
              </h1>
              <Popover.Button>
                <img
                  className="h-5"
                  src={`/images/${!open ? "menu.svg" : "cancel.svg"}`}></img>
              </Popover.Button>
            </div>
            <Popover.Panel className="absolute right-0 z-10 w-11/12 p-4 bg-white shadow-md rounded-md">
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll} classes="first:ml-1">
                    Work
                  </Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {data.showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}>
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {data.showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}>
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className="mt-10 flex flex-row items-center justify-between sticky bg-white top-0 z-10 mob:hidden tablet:flex">
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0">
          {data.name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {data.showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button>
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {data.showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
