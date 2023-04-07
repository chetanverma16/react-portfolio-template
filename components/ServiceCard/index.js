import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ title, description, imgSrc, href, icons }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  // check if icons is defined and is an array before rendering
  if (!Array.isArray(icons)) {
    icons = [];
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div
        className={`f-p-ul-box w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
          mounted && theme === "dark"
            ? "hover:bg-slate-800"
            : "hover:bg-slate-50"
        } hover:scale-105 link`}
      >
        <div className=" w-full h-64 bg-gray-300 flex  items-center justify-center">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="text-beige-900 font-bold text-2xl">{title}</h1>
          <p className="mt-2 text-gray-600">{description}</p>
          <ul className="f-p-ul">
            {icons.map((icon, index) => (
              <li key={index}>
                <img src={icon} alt={`icon ${index}`} className="w-10 h-10" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;

/* 
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, imgSrc, href, icons }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const cardVariants = {
    rest: {
      boxShadow: "0 0 0 rgba(0,0,0,0.0)",
    },
    hover: {
      boxShadow: `10px 10px 30px rgba(0,0,0,0.1)`,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <motion.div
        className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 hover:scale-105 link`}
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
      >
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
          <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h1 className="text-beige-900 font-bold text-2xl">{title}</h1>
          <p className="mt-2 text-gray-600">{description}</p>
          <ul className="f-p-ul">
            {icons.map((icon, index) => (
              <li key={index}>
                <img src={icon} alt={`icon ${index}`} className="w-6 h-6" />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </a>
  );
};

export default ServiceCard;
 */

/* 
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, imgSrc, href, icons }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const position = window.pageYOffset + window.innerHeight;
      const element = document.querySelector("#serviceCard");
      if (element.offsetTop < position) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <motion.div
        id="serviceCard"
        className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
          mounted && theme === "dark"
            ? "hover:bg-slate-800"
            : "hover:bg-slate-50"
        } hover:scale-105 link`}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-64 bg-gray-300 flex  items-center justify-center">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="text-beige-900 font-bold text-2xl">{title}</h1>
          <p className="mt-2 text-gray-600">{description}</p>
          <ul className="f-p-ul">
            {icons.map((icon, index) => (
              <li key={index}>
                <img src={icon} alt={`icon ${index}`} className="w-6 h-6" />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </a>
  );
};

export default
 */

/* import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes";

const ServiceCard = ({ title, description, imgSrc, href, icons }) => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <motion.div
        className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
          mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
        } hover:scale-105 link`}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
      >
        <div className="w-full h-64 bg-gray-300 flex  items-center justify-center">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="text-beige-900 font-bold text-2xl">{title}</h1>
          <p className="mt-2 text-gray-600">{description}</p>
          <ul className="f-p-ul">
            {icons.map((icon, index) => (
              <li key={index}>
                <img src={icon} alt={`icon ${index}`} className="w-6 h-6" />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </a>
  );
};

export default ServiceCard;
 */
