import { useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";

// Local Data
import data from "../yourData";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto mb-10">
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="mt-20">
        <h1 className="mt-5 text-8xl text-bold w-4/5">
          {data.headerTaglineOne} <br />
          {data.headerTaglineTwo}
        </h1>
        <Socials className="mt-5" />
      </div>
      <div className="mt-40" ref={workRef}>
        <h1 className="text-2xl text-bold">Work.</h1>
        <div className="mt-10 grid grid-cols-2 gap-4">
          {data.projects.map((project) => (
            <WorkCard
              img={project.imageSrc}
              name={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
      <div className="mt-40">
        <h1 className="text-2xl text-bold w-">Services.</h1>
        <div className="mt-10 grid grid-cols-2 gap-6">
          {data.services.map((service) => (
            <ServiceCard
              name={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <div className="mt-40" ref={aboutRef}>
        <h1 className="text-2xl text-bold w-">About.</h1>
        <p className="m-5 ml-0 text-3xl w-3/5">{data.aboutpara}</p>
      </div>
      <div className="mt-40">
        <h1 className="text-2xl text-bold w-">Contact.</h1>
        <div className="mt-5">
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-10">
        Made With ❤ by{" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Chetan Verma</a>
        </Link>
      </h1>
    </div>
  );
}
