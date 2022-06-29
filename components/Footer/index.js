import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="text-2xl text-bold">Contact.</h1>
        <div className="mt-5">
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-10 mob:mt-2 laptop:mt-10 mob:p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Chetan Verma</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
