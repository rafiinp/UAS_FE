import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerBackground from "../Assets/home-banner-background.png";
import '../App.css';

const Register = () => {
  return (
    <div className="home-container">
    <Navbar />
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
    <main className="form-container">
      <Form className="form-box w-100 m-auto">

      <h1 className="h3 mb-3 fw-normal">Register</h1>
      
        <Form.Group controlId="formNama">
          <Form.Label>Name</Form.Label>
          <Form.Control className="atas" type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="formUserID">
          <Form.Label>Username</Form.Label>
          <Form.Control className="tengah" type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="tengah" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formUlangiPassword">
          <Form.Label>Verifikasi Password</Form.Label>
          <Form.Control className="bawah" type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Link to="/Login">
        <Button className="w-100 mt-3">Registrasi</Button>
        </Link>

        <p>Sudah Registrasi? <Link to="/Login">Login</Link></p>

      </Form>
    </main>
    <Footer />
    </div>
  );
}

export default Register;
