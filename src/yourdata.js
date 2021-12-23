// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

// Company icon
import TeslaIcon from "./images/Company/Tesla.png"
import NVIDIAIcon from "./images/Company/NVIDIA.jpg"
import EcobeeIcon from "./images/Company/ecobee.png"
import UwaterlooIcon from "./images/Company/Uwaterloo.png"
import KhazanahIcon from "./images/Company/Khazanah.png"
import FordIcon from "./images/Company/Ford.jpg"

//import 


export default {

  //   Header Details ---------------------
  name: "Steven Feng",
  headerTagline: [
    "Aspired Robotics Engineer",

    "Embedded Software Developer",

    "Pilot",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm a driven Mechatronics Engineering Student with AI specialization from UWaterloo with passion in software engineering, prototyping, and mechanical design; and experience in robotics, autonomous vehicle, and IoT.",

  //Contact Email
  contactEmail: "jy5feng@uwaterloo.ca",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Tesla", //Project Title - Add Your Project Title Here
      para:
        "I will be joining Tesla's in Summer 2022, on the body firmware control team, which develops software that control all the cabin internals inside the Teslas", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        TeslaIcon,
      //Project URL - Add Your Project Url Here
      url: document.location.host.concat("/work/tesla/"),
    },
    {
      title: "NVIDIA AI", //Project Title - Add Your Project Title Here
      para:
        "I will be joining NVIDIA AI ISSAC Robotics Sim team, which is a scalable robotics simulation and synthetic data generation tool that powers photorealistic, and physically accurate metaverse for training advance robots.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        NVIDIAIcon,
      //Project URL - Add Your Project Url Here
      url: document.location.host.concat("/work/nvidia/"),
    },
    {
      title: "Ecobee", //Project Title - Add Your Project Title Here
      para:
        "Ecobee is a Canadian Smart Thermostat Company, I joined Ecobee as an embedded developer, worked on fixtures that supports thermostats productions and developed computer vision and machine learning algorithms for testing displays", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        EcobeeIcon  ,    
      //Project URL - Add Your Project Url Here
      url: document.location.host.concat("/work/ecobee/"),
    },
    {
      title: "University of Waterloo, Faculty of Electrical and Computer Engineering", //Project Title - Add Your Project Title Here
      para:
        "I joined the Teaching Team for an introductory C++ programming course as a TA, hosted tutorials, graded assessments, created exam questions, and supported the automated testing server using Python.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        UwaterlooIcon,
      //Project URL - Add Your Project Url Here
      url: document.location.host.concat("/work/uwaterloota/"),
    },
    {
      title: "Khazanah National Americas", //Project Title - Add Your Project Title Here
      para:
        "Khazanah is a National Wealth Fund that primarily invest in Silicon Valley startups, and as an innovation intern, I worked on different projects in the fields of drone, computer vision, AR/VR to better understand and explain the technologies to the investors", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        KhazanahIcon,
      //Project URL - Add Your Project Url Here
      url: document.location.host.concat("/work/khazanah/"),
    },
    {
      title: "Ford", //Project Title - Add Your Project Title Here
      para:
        "At Ford Motor Company, I worked on supporting the various chipsets used in the F150 as a member of the manufacturing software team, using tools such as jenkins, NI Teststand, C++, and Python.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        FordIcon,
      //Project URL - Add Your Project Url Here
      url: document.location.host.concat("/work/ford/"),
    },


  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "images/SelfPhoto.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's talk about robots!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/chetanverma16" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
