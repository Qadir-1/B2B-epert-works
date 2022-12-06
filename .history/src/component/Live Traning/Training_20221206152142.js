/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  faUser,
  faClock,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {PaymentElement} from '@stripe/react-stripe-js';

const Live = [
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    heading: "Machine Learning",
    time: "UTC−05:00",
    user: "5",
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/automation/beginner/beginner.jpg",
    heading: "Python Course",
    time: "UTC−05:00",
    user: "15",
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/maclearnbeginner/beginner1.jpg",
    heading: "Java Course",
    time: "UTC−05:00",
    user: "10",
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/azure/beginner/beginner.jpg",
    heading: "Web Development",
    time: "UTC−05:00",
    user: "9",
  },
];

const stripePromise = loadStripe(
  "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);

const Training = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };

  return (
    <>
      <Navbar />
      <HeadingTile heading="Live Training" />

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {Live.map((i) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    {/* <img src={i.img} alt="" /> */}
                    <div className="card-title">
                      <h2> {i.heading} </h2>
                      <FontAwesomeIcon icon={faClock} /> {i.time}
                      <br />
                      <FontAwesomeIcon icon={faCalendarDay} /> 12/10/2022
                      <br />
                      <FontAwesomeIcon icon={faUser} /> Number of Attendies :{" "}
                      {i.user}
                      <br />
                      <button
                        className="enroll"
                        onClick={() =>
                          alert(
                            "Enrolled Successfully and Session is Enrolled "
                          )
                        }
                      >
                        Enroll Now
                      </button>
                      <PayPalScriptProvider options={{ "client-id": "test" }}>
                        <PayPalButtons style={{ layout: "horizontal" }} />
                      </PayPalScriptProvider>
                      <Elements stripe={stripePromise} options={options}>
                      <form>
      <PaymentElement />
      <button>Submit</button>
    </form>

                      </Elements>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Training;
