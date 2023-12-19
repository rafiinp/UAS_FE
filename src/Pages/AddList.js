import React, { useState } from "react";
import { CCard } from "@coreui/react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerBackground from "../Assets/home-banner-background.png";

function AddList() {
  // deklarasi variabel nama, deskripsi
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const handleSubmit = async (e) => {
    if (nama === "" || deskripsi === "") {
      alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
    } else {
      e.preventDefault();
      await axios.post(`http://localhost:8080/insert-makanan/`, {
        nama: nama,
        deskripsi: deskripsi,
      });

      alert("Data Berhasil Ditambahkan");
      window.location.href = "/list";
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="body-flex">
        <div className="flex">
          <div className="col-10 p-5">
            <h1 className="py-1">Form Tambah Data Makanan</h1>
            <CCard className="mb-4 p-5">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nama Makanan</Form.Label>
                  <Form.Control
                    type="text"
                    name="nama"
                    autoFocus
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control
                    type="text"
                    name="deskripsi"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                  />
                </Form.Group>

                <Button type="submit" className="col-12 px-4 btn btn-success">
                  Submit
                </Button>
              </Form>
            </CCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddList;
