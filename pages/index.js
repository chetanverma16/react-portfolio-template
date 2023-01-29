import { useRef } from 'react';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Socials from '../components/Socials';
import WorkCard from '../components/WorkCard';
import Footer from '../components/Footer';
import Head from 'next/head';
import Button from '../components/Button';
import Link from 'next/link';

// Local Data
import data from '../data/portfolio.json';

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`container mt-10 mx-auto relative max-w-4xl`}>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-6 mt-6">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl mob:text-2xl tablet:text-4xl laptopl:text-6xl text-bold">
              Chetan Verma
            </h1>
            <h2 className="text-gray-600 text-2xl mob:text-base tablet:text-xl laptopl:text-2xl text-bold">
              Full Stack Developer at{' '}
              <Link href="www.chetanverma.com">
                <a className="text-gray-800 text-primary underline font-normal">
                  chetanverma.com
                </a>
              </Link>
            </h2>
            <p className="mt-2 text-base text-gray-500 tablet:w-1/2">
              Helping developers build a faster web. Teaching about web
              development, serverless, and React / Next.js.
            </p>
            <Socials className="mt-2 laptop:mt-2" />
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
