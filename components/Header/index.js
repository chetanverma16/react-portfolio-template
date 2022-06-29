import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";
// Local Data
import data from "../../yourData";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  return (
    <div className="mt-10 flex flex-row items-center justify-between sticky bg-white top-0 z-10">
      <h1
        onClick={() => router.push("/")}
        className="font-medium cursor-pointer mob:p-2 laptop:p-0">
        {data.name}.
      </h1>
      {!isBlog ? (
        <div className="flex">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          <Button onClick={() => router.push("/blog")}>Blog</Button>
          <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
            Contact
          </Button>
        </div>
      ) : (
        <div className="flex">
          <Button onClick={() => router.push("/")}>Home</Button>
          <Button onClick={() => router.push("/blog")}>Blog</Button>
          <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
            Contact
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
