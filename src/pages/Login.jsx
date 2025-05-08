import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/Footer";

const Login = () => {
  return (
    <>
      <Navbar />

      {/* Page Banner */}
      <div
        className="text-center py-5 mt-5"
        style={{
          background: "linear-gradient(to right, #A1FFCE, #FAFFD1)",
        }}
      >
        <h2 className="fw-bold text-success display-5">Login</h2>
        <p className="text-muted">Home &gt; Login</p>
      </div>

      {/* Login Form */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "70vh",
          background: "linear-gradient(to right, #E3FDFD, #CBF1F5)",
        }}
      >
        <Card style={{ width: "100%", maxWidth: "450px" }} className="shadow-lg p-4">
          <h4 className="text-center mb-4 text-success fw-bold">Welcome To LuckByChance</h4>
          <Form>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>

            <div className="text-end mb-3">
              <Link to="/recover" className="text-primary" style={{ fontSize: "0.9rem" }}>
                Recover password
              </Link>
            </div>

            <div className="d-grid mb-3">
              <Button variant="success" type="submit">
            Login ➜
              </Button>
            </div>

            <div className="text-center">
              <p style={{ fontSize: "0.9rem" }}>
                Don’t have an account? <Link to="/signup" className="text-danger">Sign up here</Link>
              </p>
              <div className="d-flex justify-content-center gap-3">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-google"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </Form>
        </Card>
      </div>

      <Footer />
    </>
  );
};

export default Login;
