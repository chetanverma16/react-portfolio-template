/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AddToCalendar from "../AddToCalendar/AddToCalendar";
import { useSpring, animated } from "react-spring";
import ExperienceLine from "../ExperienceLine/ExperienceLine";
import FeedbacksSection from "../FeedbacksSection/FeedbacksSection";

/* all styles in styles/global.css */
/* this component has many components */

/* framer animation motion */
/* text animation */
const AnimatedH1 = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <motion.h1
      className="text-4xl font-bold  mb- md:mb-0 md:mr-4 ml-4"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.h1>
  );
};

/* react spring animation */
/* for CTA gold to meet you text and add calendar btns animation */
const HangingBox = ({ children }) => {
  const [hovered, setHovered] = useState(false);

  // Define the animation spring
  const spring = useSpring({
    y: hovered ? 0 : 10,
    config: { mass: 1, tension: 100, friction: 10 },
  });

  return (
    <animated.div
      className="add-to-calendar-box"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: spring.y.interpolate((y) => `translateY(${y}px)`),
      }}
    >
      {children}
    </animated.div>
  );
};

/* for collab cards */
const SquareCards = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const cards = [
    { color: "red", title: "Card 1" },
    { color: "blue", title: "Card 2" },
    { color: "green", title: "Card 3" },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: "-20%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.9, type: "spring", damping: 7, stiffness: 122 },
    },
  };
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardDelay = 0.3;

  /* collab cards data, we could also separate this into another file */
  const SquareCardsData = [
    {
      title: "SALESFORCE",
      description: "ADMINISTRATION & DEVELOPMENT",

      imgUrl: "https://cdn-icons-png.flaticon.com/512/873/873143.png",
    },
    {
      title: "FRONTEND",
      description: "DESIGN & DEVELOPMENT",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/9163/9163452.png",
    },
    {
      title: "IT",
      description: "GENERAL FOUNDATIONS",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/9573/9573990.png",
    },
    {
      title: "LEADERSHIP",
      description: "PROJECT MANAGEMENT & TEAM-WORK",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/8187/8187421.png",
    },
  ];

  return (
    <div ref={ref} className="areas-of-work-container  my-8">
      {/* the 4 cards in collabs section */}
      <div
        className="collabs-container  grid grid-cols-4 md:grid-cols-4 gap-6  m-auto md:self-center"
        ref={ref}
      >
        <div className="collab-paragraph  md:mr-12 flex flex-col md:flex-row  justify-center">
          <h1 className="areas-of-collab-title   text-5xl font-bold text-gray-800 mb-11 md:mb-0 md:mr-4">
            Some Areas I Collab
          </h1>
          <p className="areas-of-work-paragraph text-base text-gray-600  mb-11">
            To excel in my specialties, efficient work-flows, strong
            communication, and self-discipline are crucial. My unwavering work
            ethic drives me to deliver outstanding results in web development,
            Salesforce administration, development, management, and leadership.
            By prioritizing communication, organization, and discipline, I
            optimize my workflow and consistently exceed expectations.
          </p>
          <div className="exp-line">
            <ExperienceLine /> {/* confetti line */}
          </div>
        </div>

        <div className="collab-cards-box grid grid-cols-2 md:grid-cols-2    md:self-center">
          {/* mapping cards data */}
          {SquareCardsData.map((card, i) => (
            <motion.div
              key={i}
              className="areas-of-work-cards  p-4 rounded-lg shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Image src={card.imgUrl} width={50} height={50} alt="Icon" />
              </div>
              <h2 className="collab-card-title text-lg font-bold text-black mb-2 text-5xl">
                {card.title}
              </h2>
              <p className="collab-card-p text-base text-dark-500 text-black">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* time is gold, video parent container */}
      <div className="add-to-calendar-primary-container">
        <div className="add-to-cal-parent-items-center">
          {/* time is gold box */}
          <div className=" add-to-cal-time-is-gold-box">
            <HangingBox>
              <AnimatedH1>
                <span className="time-white">Time is</span>{" "}
                <span className="gold-span">G🕤LD</span>
                <br></br> <span className="time-white">its gold to meet </span>
                <br></br>
                <span className="you-span text-5xl font-bold gold-span">
                  {" "}
                  Y🕤U!{" "}
                </span>
              </AnimatedH1>
            </HangingBox>
          </div>

          {/* calendar box */}

          <div className="calendar-box">
            <div className="calendar-box-title-msg">
              <AnimatedH1 className="">
                Let's Talk! <br></br>
                <span className="meeting-span">Schedule a meeting</span>
              </AnimatedH1>

              <div className="cal-img-box">
                <a href="https://www.linkedin.com/in/faradeen/">
                  <Image
                    src="https://media.licdn.com/dms/image/D5603AQGRTHIbNliotw/profile-displayphoto-shrink_400_400/0/1679771124043?e=1686182400&v=beta&t=5eF2DMOgKMQ4pHWMabW-PhSWZFdI8cOjdXOtcKhy7tI"
                    className="calImage"
                    height={60}
                    width={60}
                  ></Image>
                </a>
              </div>
            </div>
            <AddToCalendar />
          </div>
        </div>
      </div>
      <FeedbacksSection />
    </div>
  );
};
export default SquareCards;
