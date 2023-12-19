import { Button, FloatingLabel, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerBackground from "../Assets/home-banner-background.png";
import '../App.css';

const Login = () => {

  return (
    <>
    <div className="home-container">
    <Navbar />
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      <main className="form-container">
      <div className="bg-login">
      <Form className="form-box w-100 m-auto">
      <h1 className="h3 mb-3 fw-normal">Login</h1>

      <Form.Group controlId="formUserID">
      <Form.Label>User ID</Form.Label>
      <Form.Control type="text" placeholder="username" />
      </Form.Group>
      <Form.Group controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="password" />
      </Form.Group>
      <Link to="/Resep">
      <Button className="w-100 mt-3">Login</Button>
      </Link>

      <p>Don't have an account ? <Link to="/Register">Register</Link></p>
      </Form>
      </div>
      </main>
      <Footer />
      </div>
    </>
  )
}

export default Login