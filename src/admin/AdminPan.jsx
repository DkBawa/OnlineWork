import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const AdminPan = () => {
  return (
    <Container fluid className="p-0">
      <Row className="min-vh-100">
        {/* Sidebar */}
        <Col md={2} className="bg-dark text-white p-3">
          <h4 className="text-center mb-4">Admin</h4>
          <nav className="d-flex flex-column gap-3">
            <Link to="/admin/dashadmin" className="text-white text-decoration-none">Dashboard</Link>
            <Link to="/admin/adpurchases" className="text-white text-decoration-none">Purchases</Link>
            <Link to="/admin/adwinners" className="text-white text-decoration-none">Winners</Link>
            <Link to="/" className="text-danger text-decoration-none">Logout</Link>
          </nav>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4" style={{ background: "#f5f5f5" }}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPan;
