/** @format */
import "./HomePge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import img from "../../img/New/home_page-1_1-removebg-preview (1).png";
import Banner from "../../img/New/WhatsApp Image 2022-12-23 at 3.37.32 PM.jpeg";

import img5 from "../../img/New/Alameda 1.png";
import img6 from "../../img/New/logo 1.png";

import Carousel from "react-elastic-carousel";
import Navbar from "../Header/Navbar/Navbar";
import { useHistory } from "react-router-dom";

import img10 from "../../img/New/azure.jpeg";
import img11 from "../../img/New/dl.jpeg";
import img12 from "../../img/New/java.jpeg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const HomePage = () => {
  const history = useHistory();

  return (
    <>
      <Navbar />

      <div className="CourseNav">
        <ul>
          <li style={{ color: "white" }}>Trending Courses</li>
          <li>Deep Learning</li>
          <li>Artificial Intelligence</li>
          <li>DevOps</li>
          <li>Bigdata</li>
          <li>Datasceince</li>
          <li>
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "white", width: "65px", height: "25px" }}
            />
          </li>
        </ul>
      </div>

      {/* ------------------------------------------- */}

      <div className="HomeTwoSec">
        <div className="left">
          <video width="800" controls>
            <source
              src="https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="right">
          <p>
            Learning with{" "}
            <span style={{ fontSize: "3rem", fontWeight: "bold" }}>
              EXPERT-WORKS
            </span>{" "}
            gives you <br />
            the liberty to learn <strong>whenever , </strong>
            <strong>whereever & </strong> <strong>however </strong>
            you prefer
          </p>

          <p style={{ fontSize: "1.6rem" }}>
            Upskill Your Career with Self-paced , Hassie-free Learning Module
          </p>
          <button onClick={() => history.push("/trial")}>
            START YOUR FREE TRIAL
          </button>
        </div>
      </div>
      {/* --------------------------------------------------- */}

      <div className="HomeSignUp">
        <div className="up">
          <div className="down">
            <p style={{ fontWeight: "bold", fontSize: "2.3rem" }}>
              Sign up for new course now!!
            </p>
            <p style={{ fontWeight: "100" }}>Start learning now</p>
          </div>
          <button onClick={() => history.push("/signup")}>SIGNUP NOW</button>
        </div>
      </div>

      {/* ------------------------------------------------ */}

      <div className="HomeNewTwoSec">
        <div className="left">
          <p style={{ textAlign: "center" }}>Why</p>
          <p style={{ fontWeight: "bold", textAlign: "center" }}>
            EXPERT-WORKS?
          </p>
          <ul style={{ display: "list-item" }}>
            <li>Hybrid Learning</li>
            <li>Up-to Date Course Content</li>
            <li>Real-Time Assignments & Projects</li>
            <li>Get Certifications</li>
            <li>Dedicated Team for Support</li>
          </ul>
        </div>
        <div className="right">
          <img src={img} alt="" style={{ width: "100%" }} />
        </div>
      </div>
      {/* --------------------------------------- */}
      <div className="normalDiv"></div>

      {/* ------------------------------------------------------- */}

      <div className="HomeTwoSecSecond">
        <div className="left">
          <img src={Banner} alt="" style={{ width: "100%" }} />
        </div>
        <div className="right">
          <p>Kick Start your career with</p>
          <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>EXPERT-WORKS</h1>
          <p style={{ marginTop: "8%" }}>Increase your chances</p>
          <p>of getting hired by</p>
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>
              FORTUNE 500
            </span> companies{" "}
          </p>
          <button>Know more</button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}

      <div className="normalDiv" style={{ marginBottom: "0" }}></div>
      {/* ----------------------------------------------- */}

      <Carousel breakPoints={breakPoints} className="myCarousel">
        <div className="CarouselDiv">
          <img src={img10} alt="" style={{ width: "100%" }} />
          <p>
            Learn this In-Demand <br /> course from the Beginner <br /> Level
          </p>
          <span
            style={{
              textAlign: "left",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Watch Video (2:02)
          </span>
        </div>

        <div className="CarouselDiv">
          <img src={img11} alt="" style={{ width: "100%" }} />
          <p>
            Deep Learning course <br /> with Expert-Level <br /> information
          </p>
          <span
            style={{
              textAlign: "left",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Watch Video (2:02)
          </span>
        </div>
        <div className="CarouselDiv">
          <img src={img12} alt="" style={{ width: "100%" }} />
          <p>
            Learn this Top <br /> Programming  language from  <br />the intermediate{" "}
            Level
          </p>
          <span
            style={{
              textAlign: "left",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Watch Video (2:02)
          </span>
        </div>
        <div className="CarouselDiv">
          <img src={img10} alt="" style={{ width: "100%" }} />
          <p>
            Learn this In-Demand <br /> course from the Beginner <br /> Level
          </p>
          <span
            style={{
              textAlign: "left",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Watch Video (2:02)
          </span>
        </div>
        <div className="CarouselDiv">
          <img src={img11} alt="" style={{ width: "100%" }} />
          <p>
            Learn this In-Demand <br /> course from the Beginner <br /> Level
          </p>
          <span
            style={{
              textAlign: "left",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Watch Video (2:02)
          </span>
        </div>
      </Carousel>

      {/* ------------------------------------------------------------- */}

      <div
        className="normalDiv"
        style={{ marginBottom: "0", marginTop: "0" }}
      ></div>
      {/* ----------------------------------------------- */}

      <div className="HomeBIg">
        <h1>Encouraging feedback from satisfied subscribers</h1>
        <div className="Dis">
          <div className="left">
            <div>
              <p>
                "I had an amazing experience with Expert-Works. I Purchased
                their Salesforce admin course and complete the entire course in
                a couple of months. The video quality is good and they respond
                quickly to emails, so I found it vey helpful and convenient."
              </p>
              <button>Rhea</button>
            </div>
            <div>
              <p>
                "I purchased the machine learning course and enjoyed doint
                mini-projects assigned. Other platforms were charging extra for
                the mini-projects but with Expert-Works. I recieved a lot of
                bonuses and a course completetion certification as well. "
              </p>
              <button>Patrick</button>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------- */}

      <div className="NewNormalDiv">
        <p>Our Long-Term Patrons</p>
      </div>

      {/* ---------------------------------------------- */}

      <div className="NewHome">
        <div>
          <img src={img5} alt="" style={{ width: "120%" }} />
        </div>
        <div>
          <img src={img6} alt="" style={{ width: "100%" }} />
        </div>
      </div>

      {/* ---------------------------------------------------- */}

      <div className="myFoo">
        <div>
          <p>Our Contact</p>
          <ul>
            <li>Expert Technologies LLC</li>
            <li>1205 BMC Drive</li>
            <li>Suite 1803-E, Cedar Park TX 78613 </li>
            <li>+1 (646) 727 9186</li>
            <li>sales@expert-works.com</li>
          </ul>
        </div>
        <div>
          <p>Quick Links</p>
          <ul>
            <li>Frequently Asked Questions</li>
            <li>Term & condition</li>
            <li>Privacy Policy </li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <p>Learning</p>
          <ul>
            <li>Learning</li>
          </ul>
        </div>
        <div>
          <p>More</p>
          <ul>
            <li>About Us</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
