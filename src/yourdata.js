// Skills Icons
import clangIcon from "./images/skillsIcon/C_lang.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.jpg"
import SolidworksIcon from "./images/skillsIcon/CAD.svg"
import codeIcon from "./images/skillsIcon/code.svg"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"
import devpostIcon from "./images/contactIcon/devpost.png"


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
      url: "/work/tesla/",
    },
    {
      title: "NVIDIA AI", //Project Title - Add Your Project Title Here
      para:
        "I will be joining NVIDIA AI ISSAC Robotics Sim team, which is a scalable robotics simulation and synthetic data generation tool that powers photorealistic, and physically accurate metaverse for training advance robots.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        NVIDIAIcon,
      //Project URL - Add Your Project Url Here
      url: "/work/nvidia/",
    },
    {
      title: "Ecobee", //Project Title - Add Your Project Title Here
      para:
        "Ecobee is a Canadian Smart Thermostat Company, I joined Ecobee as an embedded developer, worked on fixtures that supports thermostats productions and developed computer vision and machine learning algorithms for testing displays", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        EcobeeIcon  ,    
      //Project URL - Add Your Project Url Here
      url: "/work/ecobee/",
    },
    {
      title: "University of Waterloo, Faculty of Electrical and Computer Engineering", //Project Title - Add Your Project Title Here
      para:
        "I joined the Teaching Team for an introductory C++ programming course as a TA, hosted tutorials, graded assessments, created exam questions, and supported the automated testing server using Python.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        UwaterlooIcon,
      //Project URL - Add Your Project Url Here
      url: "/work/uwaterloota/",
    },
    {
      title: "Khazanah National Americas", //Project Title - Add Your Project Title Here
      para:
        "Khazanah is a National Wealth Fund that primarily invest in Silicon Valley startups, and as an innovation intern, I worked on different projects in the fields of drone, computer vision, AR/VR to better understand and explain the technologies to the investors", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        KhazanahIcon,
      //Project URL - Add Your Project Url Here
      url: "/work/khazanah/",
    },
    {
      title: "Ford", //Project Title - Add Your Project Title Here
      para:
        "At Ford Motor Company, I worked on supporting the various chipsets used in the F150 as a member of the manufacturing software team, using tools such as jenkins, NI Teststand, C++, and Python.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        FordIcon,
      //Project URL - Add Your Project Url Here
      url: "/work/ford/",
    },


  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am a incoming 4th year mechatronics engineering student from the University of Waterloo. I have 6 planned coops in various sectors such as robotics, automotive, IoT, and education; and gained valuable experiences with C++, Python, and tools such as .NET, Unity and more.",
  aboutParaTwo:
    "Outside of school, I am a part of WATonomous, the Waterloo's self driving car team where I gained insights in autonomous vehicles and experiences with ROS. In addition, I compete in hackathons and built 10 unique projects which won numerous awards and learned tools such as Tensorflow and OpenCV.",
  aboutParaThree:
    "In my free time, I play the accordion and clarinet. I am also a fully licensed pilot, and I miss flying! I have also been playing a few strategy games lately, namely Total War and Civilization, add me on steam if you enjoy those games too.",
  aboutImage:
    "images/SelfPhoto.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: clangIcon,
      para:
        "C, C++, C#",
    },
    {
      img: codeIcon,
      para:
        "Python, MATLAB",
    },
    {
      img: RPIIcon,
      para:
        "Arduino, Raspberry Pi, ESP8266",
    },
    {
      img: openCVIcon,
      para:
        "OpenCV and learning Tensorflow for CNNs",
    },
    {
      img: SolidworksIcon,
      para:
        "Solidworks, AutoCAD, Blender",
    },
    {
      img: rosIcon,
      para:
        "ROS, RVIZ, and learning ISSAC Sim",
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's talk about robots!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/stevenf7" },
    {
      img: devpostIcon,
      url: "https://devpost.com/TheRealStevenFeng",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/stevenfeng7/",
    },

  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
