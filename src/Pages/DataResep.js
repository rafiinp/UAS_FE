import React, { useState } from "react";
import GambarMburi from "../Assets/gado.jpeg";
import './DataResep.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerBackground from "../Assets/home-banner-background.png";

const DataResep = () => {
  return (
    <div className="home-container">
    <Navbar />
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
    <div id="about" className="aabout-section-container">
      <div className="aabout-background-image-container">
        <img src={GambarMburi} alt="" />
      </div>
      <div className="aabout-section-text-container">
        <h1 className="aprimary-heading">
          Gado-Gado
        </h1>
        <div>
  <p className="aprimary-text">
    Berikut ini resep membuatnya:
  </p>

  <h3>Bahan-bahan:</h3>
  <ul>
    <li>Kubis atau kol 150 gram, diiris-iris kecil</li>
    <li>Bayam 175 gram</li>
    <li>Mentimun 200 gram, diiris-iris kecil</li>
    <li>Tauge 175 gram</li>
    <li>Kentang rebus 300 gram, diiris dadu</li>
    <li>Kacang panjang 200 gram</li>
    <li>Tahu kuning 300 gram, digoreng dan diiris dadu</li>
    <li>Telur rebus dibelah menjadi dua</li>
    <li>Kerupuk dan emping</li>
    <li>Bawang goreng</li>
    <li>Cabe rawit 4 buah</li>
    <li>Cabe merah 4 buah</li>
    <li>Gula merah 4 sdt</li>
    <li>Terasi bakar 1 sdt</li>
    <li>Air asam jawa 1,5 sdm</li>
    <li>Garam 2 sdt</li>
    <li>Kacang tanah 175 gram, ditumbuk halus</li>
    <li>Kacang kenari 175 gram, ditumbuk halus</li>
    <li>Kecap manis</li>
    <li>Air sebanyak 750 ml</li>
  </ul>

  <div>
  <h3>Langkah - Langkah</h3>

  <ol>
    <li>
      Rebus semua sayuran hingga lunak, lalu tiriskan. Haluskan menggunakan ullekan seperti cabe merah, terasi, cabe rawit, garam sampai halus.
    </li>

    <li>
      Kemudian masukkan kacang kenari dan kacang tanah. Tambahkan air asam, air, kecap manis, dan gula merah. Campur sampai rata.
    </li>

    <li>
      Setelah bumbu kacang halus, masukkan berbagai macam sayur yang sudah direbus. Tambahkan potongan kentang, tahu, dan telur.
    </li>

    <li>
      Kemudian setelah sudah dimasukkan ke dalam ulekkan, semua bahan diaduk secara merata. Pindahkan ke sebuah piring, lalu taburi dengan bawang goreng dan beri tambahan emping goreng.
    </li>
  </ol>
</div>

</div>

      </div>
    </div>
    <Footer />
      </div>
  );
};

export default DataResep;

