/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackSlide = ({
  title,
  titleSpan,
  imageSrc,
  content,
  icon,
  iconLinkedin,
  linkedinUrl,
}) => {
  return (
    <div className="feedback-slide">
      <div className="feedback-item-bg  p-6 rounded-sm shadow-lg ">
        <div className="flex items-center mb-6">
          <img
            src={imageSrc}
            alt={`${title} image`}
            className="rounded-full h-10 w-10 mr-4"
          />

          <h2 className="text-lg font-bold text-black">
            {title} <br></br>{" "}
            <span className="feedback-span-gray ">{titleSpan}</span>
          </h2>
        </div>
        <p className="text-gray-700">{content}</p>
        {/*   <p className="feekback-linkedin">From Linkedin</p> */}

        <div className="feedback-linkedin  flex ">
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <img
              src={iconLinkedin}
              alt={`${iconLinkedin} image`}
              className="icon rounded-full h-10 w-10 mr-"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
const FeedbacksSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 15,

    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          swipeToSlide: true,
          touchThreshold: 15,
        },
      },
    ],
  };

  /* feedbacks data json, you are also able to export this data in separate feedbackData.json file in 
  it's dir but--- that's another reason for contributions and collabs boost I preferred it as it is now */

  /* for imageSrc use next-image and import from publick/image or you simply copy a linkedin or
   other social images image url/link import a cdn.  update next.configt.js for any cdns used*/

  const feedbacks = [
    {
      title: "Taweer Majid",
      titleSpan: "General Surgeon at Detar Healthcare System",
      imageSrc:
        "https://media.licdn.com/dms/image/C4E03AQH-FfSd0CUGvA/profile-displayphoto-shrink_100_100/0/1563662809431?e=1683763200&v=beta&t=7sMxExz0H0oj7ESi7zaea-9ffvMpRaTeybNXUheHgyk",
      content:
        "Excellent customer service, knowledge, efficiency. Extremely personable. This guy will go far.",
      iconLinkedin: "https://cdn-icons-png.flaticon.com/512/2504/2504923.png",
      linkedinUrl:
        "https://www.linkedin.com/in/faradeen/details/recommendations/?detailScreenTabIndex=0",
    },
    {
      title: "Chiranjit Ghara",
      titleSpan: "Project Manager",
      imageSrc:
        "https://media.licdn.com/dms/image/C5103AQHQGZr3etEEMQ/profile-displayphoto-shrink_100_100/0/1517340343978?e=1683763200&v=beta&t=v4cghmEVyWzpTzefFWpXMOhhLk_wYoEsbmzN-2Kkvh0",
      content:
        "Faradeen is a well spoken and down to earth. He help me at *** to get my porting issue resolved nicely. He went to beyond his extent to get the job done. Happy with his service.",
      iconLinkedin: "https://cdn-icons-png.flaticon.com/512/2504/2504923.png",
      linkedinUrl:
        "https://www.linkedin.com/in/faradeen/details/recommendations/?detailScreenTabIndex=0",
    },
    {
      title: "Anita Ticak",
      titleSpan: "Interim Director Cornea & Contact Lens",
      imageSrc:
        "https://media.licdn.com/dms/image/C4E03AQEab3IUf9FxBA/profile-displayphoto-shrink_100_100/0/1516438336110?e=1683763200&v=beta&t=VcMTpXfQhcED8DZQH1iToYHgwkvCdkkYqdY5EOl3EIc",
      content:
        "Great interaction and communication! Very helpful and knowledgeable.",
      iconLinkedin: "https://cdn-icons-png.flaticon.com/512/2504/2504923.png",
      linkedinUrl:
        "https://www.linkedin.com/in/faradeen/details/recommendations/?detailScreenTabIndex=0",
    },
    {
      title: "Ryan Gupta",
      titleSpan: "Regional Financial Manager",
      imageSrc:
        "https://media.licdn.com/dms/image/D5603AQE6pYY-2n5fFw/profile-displayphoto-shrink_100_100/0/1676244132177?e=1683763200&v=beta&t=Gp8tefYm_xWj9Pcqq7aLuj9DaA7QRxft62ZaoUebkkQ",
      content:
        "Faradeen was personable, well-spoken, and showed a genuine customer service orientation. He has strong subject matter knowledge and communicates this clearly at the right level to his customers.",
      iconLinkedin: "https://cdn-icons-png.flaticon.com/512/2504/2504923.png",
      linkedinUrl:
        "https://www.linkedin.com/in/faradeen/details/recommendations/?detailScreenTabIndex=0",
    },
    {
      title: "Sacha Lazarre",
      titleSpan: "Director of Employee Engagement",
      imageSrc:
        "https://media.licdn.com/dms/image/C4E03AQHnXci5gC7wVw/profile-displayphoto-shrink_100_100/0/1562955768191?e=1686182400&v=beta&t=TKhDCWBMlAbIDT0snYSTrHJ8K90gcdJRGMrbiA3AyNU",
      content:
        "Had the pleasure to meet Faradeen and was impressed with his approachability and knowledge of product and services. He asked the right questions and listened well in order to recommend the best solutions to my problems.",
      iconLinkedin: "https://cdn-icons-png.flaticon.com/512/2504/2504923.png",
      linkedinUrl:
        "https://www.linkedin.com/in/faradeen/details/recommendations/?detailScreenTabIndex=0",
    },

    /* add more feedbacks here */
    /* add more feedbacks here */
    /* add more feedbacks here */
    /* add more feedbacks here */
    /* add more feedbacks here */
  ];

  /* reffer to styles/global.css for styles */
  /* reffer to styles/global.css for styles */
  return (
    <div className="feedback-container">
      <section className="feedback-box py-20 bg  -100">
        <div className="slick-card max-w-5xl mx-auto  px-0 sm:px-6 lg:px-8 ">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white-400 mb-2">
              Professional Feedbacks
            </h2>
            <p className="text-xl text-gray-600">
              {/* Read what our clients are saying about us. */}
              Read what my clients are saying about me.
            </p>
          </div>
          <div className="mt-12 item-width ">
            <Slider {...settings}>
              {feedbacks.map((feedback, index) => (
                <div key={index}>
                  <FeedbackSlide {...feedback} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedbacksSection;
