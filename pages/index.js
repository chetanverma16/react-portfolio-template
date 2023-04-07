import { useRef } from "react";
import Image from "next/image";

import LineCalCollab from "/components/LineCalCollab/LineCalCollab";
import Header from "/components/Header/index";
/* import ServiceCard from "/components/ServiceCard/index";
 */ import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import SelectedWork from "/components/SelectedWork/SelectedWork";

import PageLoader from "../components/PageLoader/PageLoader";
import SomeSkills from "../components/SomeSkills/SomeSkills";
/*   */
// Local Data
import data from "../data/portfolio.json";
import AddToCalendar from "../components/AddToCalendar/AddToCalendar";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const collabRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  /* selected work */

  const selectedWorks = [
    {
      id: 1,
      title: "DASHER ADMIN",
      description: "",
      image: "https://source.unsplash.com/random/800x600",
      link: "#projects",
    },
    {
      id: 2,
      title: "PORTFOLIO",
      description: "",
      image: "https://source.unsplash.com/random/800x601",
      link: "#",
    },
    {
      id: 3,
      title: "EINSTEIN ",
      description: "",
      image: "https://source.unsplash.com/random/800x602",
      link: "#",
    },
    {
      id: 4,
      title: "PROJECTAPI",
      description: "",
      image: "https://source.unsplash.com/random/800x603",
      link: "#",
    },
    {
      id: 5,
      title: "Work 5",
      description: "",
      image: "https://source.unsplash.com/random/800x604",
      link: "#",
    },
  ];

  /* add more projects */

  /* some sills section data tags, svg, related projects, related education or courses */
  /* some sills section data tags, svg, related projects, related education or courses */

  const codeSvg = (
    <svg
      className="svg1"
      fill="none"
      height="50px"
      viewBox="0 0 80 80"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#000000">
        <path d="m14 44c-.803 0-1.557-.313-2.122-.88l-10.999-10.999c-.566-.564-.879-1.318-.879-2.121s.313-1.557.88-2.122l10.999-10.999c.564-.566 1.318-.879 2.121-.879 1.654 0 3 1.346 3 3 0 .803-.313 1.557-.88 2.122l-8.878 8.878 8.879 8.879c.567.564.879 1.318.879 2.121 0 1.654-1.346 3-3 3z" />
        <path d="m46 45c-1.654 0-3-1.346-3-3 0-.803.313-1.557.88-2.122l8.878-8.878-8.879-8.879c-.566-.566-.879-1.32-.879-2.121 0-1.654 1.346-3 3-3 .803 0 1.557.313 2.122.88l10.999 10.999c.567.566.879 1.32.879 2.121 0 .803-.313 1.557-.88 2.122l-10.999 10.999c-.564.567-1.318.879-2.121.879z" />
        <path d="m21 53c-1.654 0-3-1.346-3-3 0-.398.078-.787.23-1.155l18.001-40.002c.47-1.12 1.557-1.843 2.769-1.843 1.654 0 3 1.346 3 3 0 .398-.078.787-.23 1.155l-18.001 40.002c-.47 1.12-1.557 1.843-2.769 1.843z" />
      </g>
    </svg>
  );

  const codeCloudSvg = (
    // eslint-disable-next-line react/no-unknown-property

    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      height="50px"
      strokeLinejoin="round"
      viewBox="0 0 30 30"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#000" id="Icon">
        <path d="m12.172 14.286-1.767 5.302c-.131.393.081.818.474.949s.818-.082.949-.474l1.767-5.302c.131-.393-.081-.818-.474-.949s-.818.082-.949.474z" />
        <path d="m14.202 15.938 1.237 1.237s-1.237 1.236-1.237 1.236c-.292.293-.292.768 0 1.061.293.293.768.293 1.061 0l1.767-1.767c.293-.293.293-.768 0-1.061l-1.767-1.767c-.293-.293-.768-.293-1.061 0-.292.293-.292.768 0 1.061z" />
        <path d="m8.737 14.877-1.767 1.767c-.293.293-.293.768 0 1.061l1.767 1.767c.293.293.768.293 1.061 0 .292-.293.292-.768 0-1.061l-1.237-1.236s1.237-1.237 1.237-1.237c.292-.293.292-.768 0-1.061-.293-.293-.768-.293-1.061 0z" />
        <path d="m5.816 17.651c-.167-.589-.018-1.25.447-1.714l1.767-1.767c.683-.683 1.792-.683 2.475 0 .199.199.34.435.423.686l.295-.886c.306-.916 1.298-1.412 2.214-1.107.437.146.778.448.983.823.545-.099 1.129.062 1.55.484 0 0 1.767 1.767 1.767 1.767.451.451.605 1.086.461 1.662.042-.002.083-.005.122-.007.537-.034.881-.103.981-.147 2.029-.888 3.449-2.915 3.449-5.27 0-3.174-2.576-5.75-5.75-5.75-.238 0-.473.015-.706.027-.02.001-.04.003-.06.005-.095.013-.188-.034-.233-.119-.003-.007-.007-.014-.011-.021-.992-1.728-2.856-2.892-4.99-2.892-2.707 0-4.979 1.874-5.578 4.396-.001.007-.003.015-.004.022-.02.094-.093.167-.188.186-.002 0-.004.001-.006.001-2.268.474-3.974 2.487-3.974 4.895 0 2.025 1.207 3.771 2.941 4.556.072.033.279.09.608.118.242.02.589.037 1.017.052z" />
      </g>
    </svg>
  );

  const stackSvg = (
    // eslint-disable-next-line react/no-unknown-property
    <svg
      fill="#000000"
      className="svg-center"
      width="50px"
      height="50px"
      viewBox="0 0 330 300"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <polygon points="16 104 128 168 240 104 128 40 16 104" />
      </g>
      <g>
        <path d="M12.03125,110.94629l112,64a8.00091,8.00091,0,0,0,7.9375,0l112-64a8.00024,8.00024,0,0,0,0-13.89258l-112-64a8.00411,8.00411,0,0,0-7.9375,0l-112,64a8.00024,8.00024,0,0,0,0,13.89258ZM128,49.21387,223.87549,104,128,158.78613,32.12451,104Z" />
        <path d="M236.03125,137.05371,128,198.78613,19.96875,137.05371a8.00012,8.00012,0,0,0-7.9375,13.89258l112,64a8.00091,8.00091,0,0,0,7.9375,0l112-64a8.00012,8.00012,0,0,0-7.9375-13.89258Z" />
      </g>
    </svg>
  );

  /* second skills projects section */
  /* second skills projects section */

  const starSvg = (
    <svg
      id="Layer_1"
      height="50px"
      viewBox="0 0 125 120"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m90 38.558-10.091-17.477-19.909 11.497v-22.578h-20v22.571l-19.909-11.49-10.091 17.474 19.824 11.445-19.824 11.445 10.091 17.474 19.909-11.494v22.575h20v-22.578l19.912 11.497 10.088-17.477-19.817-11.442z" />
    </svg>
  );

  const hexSvg = (
    <svg
      id="Layer_1"
      height="50px"
      viewBox="0 0 640 630"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
    >
      <path d="m30.01 144v224a32 32 0 0 0 16 27.713l193.99 112a32 32 0 0 0 32 0l193.99-112a32 32 0 0 0 16-27.713v-224a32 32 0 0 0 -16-27.713l-193.99-112a32 32 0 0 0 -32 0l-193.99 112a32 32 0 0 0 -16 27.713zm64 18.475 161.99-93.525 161.99 93.525v187.05l-161.99 93.525-161.99-93.525z" />
    </svg>
  );

  const abstractSvg = (
    <svg
      id="Capa_1"
      enableBackground="new 0 0 511.936 511.936"
      height="50px"
      viewBox="0 0 690.936 700.936"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m288.185 106.21 64.434 64.435-43.221 43.221 53.105 53.106 96.327-96.327-170.645-170.645-170.645 170.645 53.106 53.105z" />
        <path d="m341.29 288.185-117.54 117.539-64.434-64.434 43.221-43.221-53.105-53.105-96.327 96.327 170.645 170.645 170.646-170.645z" />
        <path
          d="m218.417 202.854h75.102v106.226h-75.102z"
          transform="matrix(.707 -.707 .707 .707 -106.025 255.968)"
        />
      </g>
    </svg>
  );

  /* 3rd skills porject section  */
  /* 3rd skills porject section  */
  /* 3rd skills porject section  */

  const collabSvg = (
    <svg
      id="Capa_1"
      enableBackground="new 0 0 512 512"
      height="50px"
      viewBox="0 0 650 666"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m255.974 287.084c17.163 0 31.125-13.962 31.125-31.125s-13.962-31.125-31.125-31.125-31.125 13.962-31.125 31.125 13.963 31.125 31.125 31.125z" />
        <path d="m302.865 329.575-24.531-16.745c-6.931 2.735-14.469 4.254-22.36 4.254s-15.429-1.52-22.36-4.254l-24.53 16.746c-7.972 5.442-12.731 14.453-12.731 24.105v15.563c17.812 9.402 38.106 14.732 59.647 14.732 21.521 0 41.796-5.32 59.596-14.705v-15.59c0-9.653-4.76-18.664-12.731-24.106z" />
        <path d="m256 128.025c-70.679 0-127.975 57.296-127.975 127.975 0 35.931 14.814 68.397 38.66 91.641 1.765-17.244 10.996-32.953 25.484-42.844l15.944-10.884c-8.292-10.435-13.264-23.621-13.264-37.954 0-33.705 27.42-61.125 61.125-61.125s61.125 27.42 61.125 61.125c0 14.333-4.972 27.52-13.264 37.954l15.944 10.884c14.501 9.899 23.736 25.628 25.488 42.89 23.874-23.247 38.708-55.733 38.708-91.688 0-70.678-57.296-127.974-127.975-127.974z" />
        <path d="m241 57.427v48.102h30v-48.102l16.997 16.996 21.212-21.213-53.209-53.21-53.209 53.21 21.212 21.213z" />
        <path d="m271 454.573v-48.102h-30v48.102l-16.997-16.996-21.212 21.213 53.209 53.21 53.209-53.21-21.212-21.213z" />
        <path d="m82.751 192.921-6.221-23.218 41.658 24.052 15-25.981-41.658-24.051 23.218-6.222-7.765-28.977-72.686 19.476 19.477 72.686z" />
        <path d="m429.249 319.079 6.221 23.218-41.658-24.052-15 25.981 41.658 24.051-23.218 6.222 7.765 28.977 72.686-19.476-19.477-72.686z" />
        <path d="m118.188 318.245-41.658 24.052 6.221-23.218-28.977-7.765-19.477 72.686 72.686 19.476 7.765-28.977-23.218-6.222 41.658-24.051z" />
        <path d="m393.812 193.755 41.658-24.052-6.221 23.218 28.977 7.765 19.477-72.686-72.686-19.476-7.765 28.977 23.218 6.222-41.658 24.051z" />
      </g>
    </svg>
  );

  const timeSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="glipy_copy_5"
      data-name="glipy copy 5"
      viewBox="0 0 80 79"
      width="50px"
      height="50px"
    >
      <path d="M32,2A30,30,0,1,0,62,32,30.03661,30.03661,0,0,0,32,2ZM47.07,36.41l2.19,1.27a2.20774,2.20774,0,0,1,.8,3.02l-1.51,2.62a2.20794,2.20794,0,0,1-3.01.81l-2.2-1.27a15.74574,15.74574,0,0,1-7.63,4.4v2.53A2.21074,2.21074,0,0,1,33.5,52H30.48a2.21926,2.21926,0,0,1-2.22-2.21V47.26a15.64238,15.64238,0,0,1-7.61-4.42l-2.19,1.27a2.21784,2.21784,0,0,1-3.03-.81l-1.52-2.62a2.22937,2.22937,0,0,1,.82-3.02l2.19-1.27a15.77109,15.77109,0,0,1,.01-8.8l-2.19-1.27a2.20774,2.20774,0,0,1-.8-3.02l1.51-2.62a2.20794,2.20794,0,0,1,3.01-.81l2.2,1.27a15.74574,15.74574,0,0,1,7.63-4.4V14.21A2.21073,2.21073,0,0,1,30.5,12h3.02a2.21924,2.21924,0,0,1,2.22,2.21v2.53a15.64273,15.64273,0,0,1,7.61,4.42l2.19-1.27a2.21779,2.21779,0,0,1,3.03.81l1.52,2.62A2.19535,2.19535,0,0,1,50.3,25a2.139,2.139,0,0,1-1.03,1.34l-2.19,1.27A15.77088,15.77088,0,0,1,47.07,36.41Z" />
      <path d="M32,19.86A12.15894,12.15894,0,0,0,19.86,32c.66,16.11,23.62,16.11,24.28,0A12.15894,12.15894,0,0,0,32,19.86Zm0,22.85A10.71639,10.71639,0,0,1,21.29,32c.58-14.21,20.84-14.21,21.42,0A10.71639,10.71639,0,0,1,32,42.71Z" />
      <path d="M38.41,31.29h-4.4a2.14619,2.14619,0,0,0-1.3-1.3V23.43a.71009.71009,0,1,0-1.42,0v6.56a2.13487,2.13487,0,1,0,2.72,2.72h4.4A.71.71,0,0,0,38.41,31.29ZM32,32.71a.71.71,0,0,1,0-1.42A.71.71,0,0,1,32,32.71Z" />
    </svg>
  );

  const bracketSvg = (
    <svg
      fill="none"
      height="50px"
      viewBox="0 0 29 30"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="rgb(0,0,0)">
        <path d="m18 21h-4c-.6 0-1-.4-1-1s.4-1 1-1h3v-14h-3c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1z" />
        <path d="m5 17c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
        <path d="m9 17c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
        <path d="m13 17c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
      </g>
    </svg>
  );

  /* continued... */
  /* someskills realted projects cards */
  const card1 = {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/8275/8275751.png",
    title: "Skills 360°",
    paragraph:
      "Proficient in web development, low-code development, and the Salesforce platform, with strong technical skills and experience in leadership, project management, and industry. Skilled in analytics, with a proven ability to collect and analyze data to inform decision-making.",
    tags: [
      "Web development",
      "Low-code development",
      "Salesforce platform",
      "Technical",
      "Leadership",
      "Project management",
      "Industry",
      "Analytics",
    ],

    relatedProjects: [
      {
        title: "React Portfolio360",
        description: "Designed & developed a V4 multi features portfolio site.",
        url: "https://www.project1.com/",
        iconUrl: " ",
        category: "Frontend",
        category2: "Design & Development",
        iconSVG: codeCloudSvg,
      },

      {
        title: "Custom Object and Workflow Automation",
        description:
          "Created and customized objects, validation rules & workflow rules, implemented field updates",
        url: "https://www.project2.com/",
        iconUrl: "",
        category: "Salesforce",
        category2: "Administration",
        iconSVG: codeSvg,
      },
      {
        title: "Order Management System App",
        description:
          "Used lightning app builder & lightning component framework to create custom UI & custom actions",
        url: "https://www.project2.com/",
        iconUrl: "",
        category: "Salesforce",
        category2: "Design, Develop",
        iconSVG: stackSvg,
      },
    ],
  };

  const card2 = {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/9568/9568705.png",
    title: "Technologies",
    paragraph:
      "Proficient in HTML5, CSS, JavaScript (ES6+), Salesforce platform (including Lightning web components framework, Apex, SFDX), React.JS, and popular front-end libraries such as Bootstrap and Tailwind CSS. Experience with Node.js, NPM, Git version control, and cloud services such as AWS.",
    tags: [
      "HTML5 CSS",
      "JavaScript ES6+",
      "Lightning web components ",
      "APEX ",
      "Salesforce platform",
      "React.JS",
      "Bootstrap Tailwind CSS",
      "NODE JS NPM",
      "SOQL",
      "GIT",
      "AWS",
      "Version control",
    ],

    relatedProjects: [
      {
        title: "Netflix Clone using react",
        description: "Cloning netflix design with React, GraphQL & AstraDB",
        url: "https://www.project1.com/",
        iconUrl: " ",
        category: "Workshop",
        category2: "Frontend & Backend",
        iconSVG: starSvg,
      },

      {
        title: "React Portfolio360",
        description:
          "Designed & developed a V4 multi features portfolio site using react next tailwind frameworks",
        url: "https://www.project2.com/",
        iconUrl: "",
        category: "Frontend",
        category2: "Design & Development",
        iconSVG: hexSvg,
      },
      {
        title: "Salesforce AdminOps Find360",
        description:
          "Designed & developed an AppExchange App that allows users to access the Salesforce Quick Find.",
        url: "https://www.project2.com/",
        iconUrl: "",
        category: "Salesforce",
        category2: "Design & Development",
        iconSVG: abstractSvg,
      },
    ],
  };

  /* card 3  */
  const card3 = {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/10033/10033944.png",
    title: "Soft Skills",
    paragraph:
      "Effective communication and collaboration, with the ability to adapt to changing circumstances and prioritize time management to meet deadlines. Demonstrated leadership skills, combined with critical thinking and creativity, to solve problems and achieve goals.",
    tags: [
      "Communication",
      "Collaboration",
      "Adaptability",
      "Time management",
      "Leadership",
      "critical thinking",
      "creativity",
    ],

    relatedProjects: [
      {
        title: "React Portfolio360",
        description:
          "Designed & developed a V4 --multi features portfolio site. ",
        url: "https://www.project1.com/",
        iconUrl: " ",
        category: "Frontend",
        category2: "Collaboration & Communication",
        iconSVG: collabSvg,
      },

      {
        title: "Real-world on the job projects",
        description:
          "Exerience in telecommunication and information technology provided B2B, consumers, end-users solutions",
        url: "https://www.project2.com/",
        iconUrl: "",
        category: "Leardership",
        category2: "Team-work",
        iconSVG: timeSvg,
      },
      {
        title: "Salesforce AdminOps Find360",
        description:
          "Designed & developed an AppExchange App that allows users to access the Salesforce Quick Find.",
        url: "https://www.project2.com/",
        iconUrl: "",
        category: "Creativity",
        category2: "critical thinking",
        iconSVG: bracketSvg,
      },
    ],
  };

  /*   const card4 = {
    iconUrl: "https://example.com/icon2.png",
    title: "Card 4",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget turpis massa. Ut auctor semper ligula, vel auctor elit convallis quis.",
    tags: [
      "Communication",
      "Collaboration",
      "Adaptability",
      "Time management",
      "Leadership",
      "critical thinking",
      "creativity",
    ],
  };
 */

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

  /* optimized-buttons scroll */
  const handleSkillsScroll = () => {
    window.scrollTo({
      top: skillsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleCollabScroll = () => {
    window.scrollTo({
      top: collabRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  /* optimzied-setTimer to cooperate with page loader timer*/
  useIsomorphicLayoutEffect(() => {
    setTimeout(() => {
      stagger(
        [textOne.current, textTwo.current, textThree.current, textFour.current],
        { y: 30, x: -10, transform: "scale(0.95) skew(10deg)" },
        { y: 0, x: 0, transform: "scale(1)" }
      );
    }, 6000); // delay of 7 seconds animates after pageloader
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>

      <div className="gradient-circle-bottom"></div>

      <div className="container   mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleSkillsScroll={handleSkillsScroll}
          handleCollabScroll={handleCollabScroll}
        />

        {/* use to update hero profile card, img, IM styles>global.css */}
        <div className="hero-container-profile-card-center">
          <div className="profile-mobile laptop:mt-20 mt-10">
            <div className="mt-5 ">
              <h1
                ref={textOne}
                className=" font-bold  text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-5/5 mob:w-full laptop:w-5/5"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className=" font-bold  text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textThree} /* text 3 font size changd */
                className=" font-bold  text-3 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineThree}
              </h1>
              <h1
                ref={textFour} /* text-4 font size changed */
                className="text-4 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineFour}
              </h1>

              {/* src ==> bring your own images from local image folder instead or bring it using a cdn link url domain like pexel, linked cdn or othre cdns*/}

              {/* for page preview logo */}
            </div>

            {/* center along with forks status indicator  */}
            <Socials className="social-align-center mt-2 laptop:mt-5" />
          </div>
        </div>
        <div
          className="
        "
        >
          {/* selected work component */}
          <div className="selected-work-container">
            <SelectedWork selectedWorks={selectedWorks} />
          </div>
          <PageLoader />
        </div>
        {/* skills and techStacks section before projects sections */}

        {/* skills component */}
        <div className="skills-related-projects-container mx-auto">
          <h1 className="text-5xl font-bold text-center" ref={skillsRef}>
            Skills 360°
          </h1>

          <SomeSkills {...card1} />
          <SomeSkills {...card2} />
          <SomeSkills {...card3} />
          {/* add more cards here */}
        </div>

        {/* imported collab line and calendar components */}

        <div ref={collabRef}>
          {/* Add any other components or markup here */}
          <LineCalCollab />
          {/* Add any other components or markup here */}
        </div>

        <div
          className="laptop:mt-30 p-2 laptop:p-0 projects-container"
          ref={workRef}
        >
          <h1 id="projets" className=" text-5xl font-bold text-center ">
            Projects
          </h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-2">
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

        {/* workcard muted */}
        {/* 
       <div className="mt-10 laptop:mt-30 p-2 laptop:p-0 ">
          
          <h1 className=" tablet:m-10 text-2xl text-bold">service CArd</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
             
              />
            ))}


          </div>
          
        </div>  */}

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        {/*    <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="about-title tablet:m-10 text-5xl text-bold">
            🐱About
          </h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div> */}

        <Footer />
      </div>
    </div>
  );
}
