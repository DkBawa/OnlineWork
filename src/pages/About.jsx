// src/pages/About.jsx
import React from 'react';
import Navbar from '../component/layout/Navbar';
import Footer from '../component/Footer';

const About = () => {
  return (
    <>
      <Navbar />

      {/* Page Background with Padding */}
      <div
        style={{
          background: 'linear-gradient(135deg, #C8E6C9, #A5D6A7)',
          color: '#1B5E20',
          minHeight: '100vh',
          paddingTop: '100px', // Navbar height adjustment
          paddingBottom: '0px', // For footer space
         
        }}
      >
        <div className="container text-center">
          <h1 className="text-center text-primary mb-5"><strong>🔥 About Us </strong></h1>

          <div className="row align-items-center">
            <div className="col-md-6 mb-5">
              <img
                src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-4171.jpg"
                alt="About"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-5 mb-0 text-start">
              <h3 className="text-success">
                Welcome to <span className="text-warning">LuckByChance</span>
              </h3>
              <p className="lead text-dark">
                We are India’s most trusted lucky draw platform, offering exciting rewards and a fair play experience for everyone.
              </p>
              <p className="text-muted">
                Our goal is to deliver a seamless and thrilling lucky draw experience. Participate now and win big with just a few clicks!
              </p>

              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item bg-transparent">✅ Transparent Draws</li>
                <li className="list-group-item bg-transparent">✅ Fast Payouts</li>
                <li className="list-group-item bg-transparent">✅ Fair Chance for All</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
