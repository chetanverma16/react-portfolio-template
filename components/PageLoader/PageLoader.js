import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../PageLoader/PageLoader.module.css";

const PageLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    const timer = setInterval(() => {
      switch (loadingText) {
        case "Loading...":
          setLoadingText("Fetching data...");
          break;
        case "Fetching data...":
          setLoadingText("Access granted...");
          break;
        case "Access granted...":
          setLoadingText("Running tests...");
          break;
        case "Running tests...":
          setLoadingText("Done!");
          clearInterval(timer);
          break;
        default:
          break;
      }
    }, 1200);
    return () => clearInterval(timer);
  }, [loadingText]);

  return (
    <>
      {showLoader && (
        <div
          className={`${styles.loaderContainer} loader-cont fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-black z-50`}
        >
          <div className={`${styles.loaderBox}load-box w-80 h-80 relative`}>
            <div
              className={`${styles.shapeContainer}  absolute inset-0 flex justify-center items-center`}
            >
              <div
                className={`${styles.logoBox} text-center text-white font-bold text-6xl uppercase`}
              >
                <svg
                  className={`${styles.svg}`}
                  id="Layer_1"
                  enableBackground="new 0 0 24 24"
                  height="512"
                  viewBox="0 0 24 24"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <linearGradient
                    id="SVGID_1_"
                    gradientUnits="userSpaceOnUse"
                    x1="1.996"
                    x2="22.004"
                    y1="12"
                    y2="12"
                  >
                    <stop offset="0" stopColor="#02beff" />
                    <stop offset="1" stopColor="#535bff" />
                  </linearGradient>
                  <switch>
                    <g>
                      <path
                        d="m21.9 11.5-4.5-7.8c-.2-.3-.5-.5-.9-.5h-9c-.4 0-.7.2-.9.5l-4.5 7.8c-.2.3-.2.7 0 1l4.5 7.8c.2.3.5.5.9.5h9c.4 0 .7-.2.9-.5l4.5-7.8c.1-.3.1-.7 0-1zm-6 7.3h-7.8l-4-6.8 3.9-6.8h7.8l3.9 6.8z"
                        fill="url(#SVGID_1_)"
                      />
                    </g>
                  </switch>
                  FJ
                </svg>
                <h3 className={`${styles.h3}`}>FJ</h3>
              </div>
              <div
                className={`${styles.loaderShape} ${styles.animateSpinSlow}}`}
              ></div>
            </div>
          </div>

          {/* top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  */}
          <div className="terminal-container relative bg-black w-100 h-100 rounded-md overflow-hidden">
            <div className="cli-header flex items-center h-8 bg-gray-800 px-3">
              <div className="cli-dot bg-red-500 rounded-full w-3 h-3 mr-2"></div>
              <div className="cli-dot bg-yellow-500 rounded-full w-3 h-3 mr-2"></div>
              <div className="cli-dot bg-green-500 rounded-full w-3 h-3 mr-2"></div>
              <div className="cli-title text-white font-bold">Going live</div>
            </div>
            <div
              className="terminal relative bottom-0 left-0 w-100 h-100 px-4 py-2 bg-green-900 text-green-500 font-mono text-sm"
              style={{ lineHeight: "1.5rem" }}
            >
              <p>{loadingText}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageLoader;
