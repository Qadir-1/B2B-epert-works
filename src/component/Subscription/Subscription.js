/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import img from "../../img/New/Main copy 2.png";
import img2 from "../../img/New/Main copy 1.png";
import { useHistory } from "react-router-dom";

const Subscription = () => {

    const history = useHistory()


  return (
    <>
      <Navbar />
      <h1 style={{ fontWeight: "bold", marginTop: "1%", fontSize: "5rem" }}>
        SUBSCRIPTIONS
      </h1>
      <p>
        Experience the best E-learning experience with the best affordable and
        tailored packages.
      </p>

      <div className="subsImages">
        <div className="subsDIV"></div>
        <img src={img} alt=""  onClick={() => history.push('/billing')}/>
        <img src={img2} alt="" onClick={() => history.push('/billing')} />
      </div>
    </>
  );
};

export default Subscription;
