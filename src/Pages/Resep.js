import React from "react";
import img1 from "../Assets/bening.jpg";
import img2 from "../Assets/gado.jpeg";
import img3 from "../Assets/salad.jpeg";
import img4 from "../Assets/soto.jpeg";
import img5 from "../Assets/tewel.jpg";
import { Link } from 'react-router-dom';
import './Resep.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerBackground from "../Assets/home-banner-background.png";

const Resep = () => {
  const PesanLayananInfoData = [
    {
      image: img1,
      title: "Sayur Bening",
    },

    {
      image: img2,
      title: "Gado Gado",
    },
    
    {
      image: img3,
      title: "Salad Sayur",
    },

    {
      image: img4,
      title: "Soto",
    },

    {
      image: img5,
      title: "Sayur Tewel",
    },
    
  ];
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="Pelayanan-section-wrapper">
        {/* ... */}
        <div className="Pelayanan-section-bottom">
          {PesanLayananInfoData.map((data) => (
            <div className="Pelayanan-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <Link to="/DataResep">
                <h2>{data.title}</h2>
              </Link>
              <p>{data.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
          }  

export default Resep;
