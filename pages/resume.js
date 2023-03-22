import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";
import { Chrono } from "react-chrono";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  const items = [{
    title: "Feb 2021 - Present",
    cardTitle: "Amazon Web Services",
    cardSubtitle: "Software Development Engineer, Full Time",
    cardDetailedText: ["Worked as a front-end developer system for console systems. Developed UI features for different complex customer use cases ensuring security of data. Built APIs using API Gateway and lambda infrastructure for custom data processing needed for IAM console.",
      "Designed solutions to reduce loading times on browser because of huge customer data. Lead projects to create new user experience using ReactJS with better visualizations and data handling reducing the number API calls being made to back-end systems by 15 percent.",
      "Designed a solution to stop a fraud activity on AWS. Ensured security of our console by resolving a major XSS vulnerability in our legacy code."
    ],
  }, {
    title: "Feb 2021 - Present",
    cardTitle: "Amazon Web Services",
    cardSubtitle: "Software Development Intern, Full Time",
    cardDetailedText: [<span>Worked on developing a <b>Policy evaluation widget</b> components using React, Angular frameworks and explored AWS API gate way and custom Amazon build and deployment frameworks.</span>,
      "Designed the workflow, architecture and helped in developing UX of the widget. Explored various methods to mitigate security issues and implemented the best possible solution."],
  }, {
    title: "Jun 2017 - July 2019",
    cardTitle: "Zemoso Technologies",
    cardSubtitle: "Software Engineer, Full Time",
    cardDetailedText: ["Developed voice bots on different market leader platforms like Alexa, Google Assistant, Cortana. Integrated the developed voice bots with applications on Android and IOS to evaluate various market possibilities of voice driven applications.",
      "Involved in developing an algorithm to update the database with future weather data from a service provider and warn a proposed flight plan. Stored large sets of US states forecast weather with specific intervals in Elasticsearch and updated the database using a cron job developed in Java based micro service.",
      "Worked with a team in developing a portal to automate approvals for drone navigation. Also integrated maps for creating stick path of the drone and real-time tracking of the drone flying. Integrated micro services using Kafka to transform data and avoid circular dependencies."
    ],
  }, {
    title: "May 2016 - July 2016",
    cardTitle: "Airbus",
    cardSubtitle: "Summer Intern",
    cardDetailedText: ["Analyzed a large set of patent data in the fields of Big Data, IoT & robotics in manufacturing mainly in the aviation industry. The insights derived from the data set are used to get estimate of the future technology investments in manufacturing sector.",],
  }];
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${data.showCursor && "cursor-none"
          }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
                } max-w-7xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {/* {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )} */}
                <div className="mt-5" style={{ width: "1000px", height: "1150px" }} >
                  <Chrono items={items} mode="VERTICAL" hideControls={true} theme={{
                    primary: 'grey',
                    secondary: 'black',
                    cardBgColor: 'white',
                    cardForeColor: 'black',
                    titleColor: 'black',
                    titleColorActive: 'white',
                  }} classNames={{
                    cardSubTitle: 'timeline-cardsubTitle'
                  }} timelineCircleDimension={30}>
                    <div className="chrono-icons">
                      <img src="/images/aws.png" alt="AWS" />
                      <img src="/images/aws.png" alt="AWS" />
                      <img src="/images/zemoso.png" alt="Zemoso" />
                      <img src="/images/airbus.png" alt="Airbus" />
                    </div>
                  </Chrono>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                {
                  resume.education.map(({ universityName, universityDate, universityPara }) => {
                    return <div className="mt-2">
                      <h2 className="text-lg">{universityName}</h2>
                      <h3 className="text-sm opacity-75">
                        {universityDate}
                      </h3>
                      <p className="text-sm mt-2 opacity-50">
                        {universityPara}
                      </p>
                    </div>
                  })
                }
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Languages</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Frameworks</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Others</h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
