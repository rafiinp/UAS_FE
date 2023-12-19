import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerBackground from "../Assets/home-banner-background.png";
import {Link} from "react-router-dom";

function List() {
  const [data_nutrisiku, setDataNutrisiku] = useState([]);
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const GetDataNutrisiku = async () => {
    const getData = await axios.get(`http://localhost:8080/makanan/`);
    setDataNutrisiku(getData.data.data);
  };

  useEffect(() => {
    GetDataNutrisiku();
  }, []);

  const UpdateDataMakanan = async (event) => {
    event.preventDefault();
    try {
      const putData = await axios.put(
        `http://localhost:8080/update-makanan/${id}`,
        {
          nama: nama,
          deskripsi: deskripsi,
        }
      );
      alert(putData.data.messages);
      window.location.reload();
    } catch (error) {
      alert("Data Gagal diubah");
    }
  };

  const showModal = (data) => {
    setId(data.id);
    setNama(data.nama);
    setDeskripsi(data.deskripsi);
    setShowEditModal(true);
  };

  const closeModal = () => {
    setId("");
    setNama("");
    setDeskripsi("");
    setShowEditModal(false);
  };

  const showModalDelete = (data) => {
    setId(data.id);
    setNama(data.nama);
    setDeskripsi(data.deskripsi);

    // Show confirmation alert
    const isConfirmed = window.confirm(`Apakah Anda yakin menghapus data ${data.nama}?`);
    
    if (isConfirmed) {
      // If confirmed, proceed with deletion
      DeleteDataMakanan();
    }
  };

  const closeModalDelete = () => {
    setId("");
    setNama("");
    setDeskripsi("");
    setShowDeleteModal(false);
  };

  const DeleteDataMakanan = async () => {
      const confirmDelete = window.confirm("Apakah anda yakin ingin menghapus data makanan?");
      if (confirmDelete) {
        await axios.delete(
        `http://localhost:8080/delete-makanan/${id}`
        );
        GetDataNutrisiku();
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
            <h1 className="py-1">Data Makanan</h1>
            <CCard className="mb-4">
              <CCardBody>
                <div className="py-3">
                  <Link to={`/addlist`}>
                  <CButton className="tambahdata">
                    Tambah Data
                  </CButton>
                  </Link>
                </div>

                <CTable className="table-bordered">
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Nama Makanan</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Deskripsi</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {data_nutrisiku.map((item, index) => (
                      <CTableRow key={index}>
                        <CTableHeaderCell>{item.nama}</CTableHeaderCell>
                        <CTableDataCell>{item.deskripsi}</CTableDataCell>
                        <CTableDataCell>
                        <Link to={`/editlist/${item.id}`}>
                          <CButton
                            className='btn btn-primary text-white me-2'
                          >
                            Edit
                          </CButton>
                          </Link>
                          
                          <CButton
                            className='btn btn-danger text-white'
                            onClick={() => showModalDelete(item)}
                          >
                            Hapus
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default List;
