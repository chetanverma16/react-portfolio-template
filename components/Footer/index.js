import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import AddToCalendar from "../AddToCalendar/AddToCalendar";
import FooterCard from "../FooterCard/FooterCard";

/* for styles go to styles/global.css */
const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl  text-bold"></h1>
          <div className="mt-10">
            <h1 className=" footer-text text-center text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-7xl font-bold">
              LET&apos;S BUILD
            </h1>
            <h1 className="footer-text text-center text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-7xl  font-bold">
              T🤓GETHER
            </h1>
            <h1 className="footer-text text-center text-1xl tablet:text-2xl laptop:text-2xl laptopl:text-2xl mt-12  font-bold">
              Schedule a Meeting!
            </h1>

            <div className="footer-calendar flex justify-center">
              <AddToCalendar />
            </div>

            <div className="footer-social-flex mt-64">
              <div className="footer-align-center">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterCard />
    </>
  );
};

export default Footer;
