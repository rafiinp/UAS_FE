import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import "../App.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerBackground from "../Assets/home-banner-background.png";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [formData, setFormData] = useState({
    nama: '',
    deskripsi: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/makanan/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching data for edit:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await axios.put(`http://localhost:8080/update-makanan/${id}`, formData);
      setLoading(false);

      alert("Berhasil Mengubah Data Resep");
      // Redirect to the data list page after successful update
      navigate('/list'); // Replace '/product' with the actual route for the data list
    } catch (error) {
      console.error('Error updating data:', error);
      setLoading(false);
      setError("Data Gagal diubah. Silakan coba lagi.");
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="update-form">
        <div className="modal">
          <div className="modal-header">
            <h2>Form Update Data</h2>
          </div>
          <div className="modal-body">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Nama</label>
                <input
                  type="text"
                  autoFocus
                  name="nama"
                  onChange={handleInputChange}
                  value={formData.nama}
                />
              </div>
              <div className="form-group">
                <label>Deskripsi</label>
                <input
                  type="text"
                  autoFocus
                  name="deskripsi"
                  onChange={handleInputChange}
                  value={formData.deskripsi}
                />
              </div>
              <button className="col-12 px-4 btn btn-success" type="submit" disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
              </button>
              {error && <p className="text-danger">{error}</p>}
            </form>
          </div>
          <div className="modal-footer">
            <button className="col-12 px-4 btn btn-success" onClick={() => navigate('/list')} disabled={loading}>
              Close
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Update;
