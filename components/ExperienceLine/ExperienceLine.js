import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";

const ExperienceLine = () => {
  const [stop1, setStop1] = useState(0);
  const [stop2, setStop2] = useState(0);
  const [stop3, setStop3] = useState(0);
  const [stop4, setStop4] = useState(0);
  const [stop5, setStop5] = useState(0);

  const [totalYears, setTotalYears] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const lineRef = useRef(null);
  const stop1Ref = useRef(null);
  const stop2Ref = useRef(null);
  const stop3Ref = useRef(null);
  const stop4Ref = useRef(null);
  const stop5Ref = useRef(null);
  const titleRef = useRef(null);
  const dotRef = useRef(null); /* for dot refference */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStop1(10);
          titleRef.current.style.opacity = "1";
          setTimeout(() => setStop2(20), 3000);
          setTimeout(() => setStop3(30), 2000); /* transitions */
          setTimeout(() => setStop4(40), 3000);
          setTimeout(() => setStop5(40), 4000);
          setTimeout(() => {
            setTotalYears(1 + 2 + 3 + 5);
            setShowConfetti(true);
            dotRef.current.style.transform = "translateX(50%)";
          }, 6000);
        }
      },
      { rootMargin: "0px", threshold: 0.5 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(lineRef.current);
      }
    };
  }, [lineRef]);

  return (
    <div className=" flex flex-col items-center justify-center  ">
      {" "}
      {/* h-screen */}
      <div
        ref={lineRef}
        className=" line-width mr-4 relative w-96 h-8 line-bg  rounded-full overflow-hidden" /* line height h-6 */
      >
        <span
          ref={stop1Ref}
          className={`line-span absolute inset-0 bg-red-500 rounded-full transform transition-all duration-1000  ${
            stop1 ? "w-2/4" : "w-0"
          }`}
        >
          Salesforce: 1 Year
        </span>

        <span
          ref={stop2Ref}
          className={`line-span  absolute inset-0 bg-yellow-500 rounded-full transform transition-all duration-1000 delay-2000 ${
            stop2 ? "w-3/4" : "w-0"
          }`}
        >
          {" "}
          Front-end development: 2 Years{" "}
        </span>

        <span
          ref={stop3Ref}
          className={`line-span  absolute inset-0 bg-green-500 rounded-full transform transition-all duration-1000 delay-3000 ${
            stop3 ? "w-4/5" : "w-0"
          }`}
        >
          IT General: 3 years
        </span>

        <span
          ref={stop4Ref}
          className={`line-span absolute inset-0 bg-blue-500 rounded-full transform transition-all duration-1000 delay-4000 ${
            stop4 ? "w-full" : "w-0"
          }`}
        >
          Leadership: 5 Years{" "}
        </span>

        <span
          ref={stop5Ref}
          className={`line-span  absolute inset-0 bg-lime-500 rounded-full transform transition-all duration-1000 delay-4000 ${
            stop5 ? "w-full" : "w-0"
          }`}
        >
          Total: {totalYears}{" "}
        </span>

        {/* confetti runs after final line animation  */}

        {stop5 && (
          <Confetti
            width={lineRef.current.offsetWidth}
            height={lineRef.current.offsetHeight}
          />
        )}

        <span
          ref={dotRef}
          className={`line-dot absolute top-2/2 transform transition-all duration-1000 delay-500 ${
            dotRef ? "left-0" : "left-full"
          }  w-8 h-8 bg-white p-2 border-4 border-white-700 rounded-full z-10`}
        />
      </div>
      <div className="mt-4 total-years-span text-center  text-2xl font-bold">
        <h2
          ref={titleRef}
          className=" opacity-0 transition-opacity duration-1000"
        >
          All time experience: &nbsp; {totalYears} Years
        </h2>
      </div>
    </div>
  );
};

export default ExperienceLine;
