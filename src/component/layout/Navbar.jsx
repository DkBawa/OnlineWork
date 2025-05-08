// src/component/layout/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold fs-3 text-warning" to="/">LuckByChance</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
            {/* <li className="nav-item"><Link className="nav-link text-white" to="/products">LuckyDraw</Link></li> */}
            <li className="nav-item"><Link className="nav-link text-white" to="/winners">Winners</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/mytickets">MyTicket</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
             <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/login">SignUp</Link></li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


