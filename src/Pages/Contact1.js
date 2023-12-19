import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerBackground from "../Assets/home-banner-background.png";

const Contact1 = () => {
  return (
    <div className="home-container">
    <Navbar />
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>

          <Footer />
        </div>
  );
};

export default Contact1;
