import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Navbar from '../component/layout/Navbar';
import JackpotCard from '../component/JackpotCard';
import Footer from '../component/Footer';

const Home = () => {
  const winners = [
    {
      name: "Richard William",
      timeAgo: "2 minutes ago",
      amount: "₹1,00,000",
      drawDate: "20/05/2022",
      Numbers: [1542635],
    },
    {
      name: "Sarah Johnson",
      timeAgo: "55 minutes ago",
      amount: "₹50,000",
      drawDate: "20/05/2022",
      Numbers: [1542635],
    },
    {
      name: "David Smith",
      timeAgo: "1 hour ago",
      amount: "₹25,000",
      drawDate: "20/05/2022",
      Numbers: [1542635],
    },
    {
      name: "Emily Davis",
      timeAgo: "4 hours ago",
      amount: "Smartphone",
      drawDate: "20/05/2022",
      Numbers: [1542635],
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: '80vh',
          backgroundImage: `url("/images/homebanner.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="bg-dark bg-opacity-50 p-5 rounded"
          style={{ transform: 'translateY(145px)' }}
        >
          <h1 className="display-4 fw-bold">Welcome to LuckByChance</h1>
          <p className="lead">Buy a product & get a chance to win amazing prizes!</p>
          <Link to="/products" className="btn btn-warning btn-lg">
            Shop Now
          </Link>
        </div>
      </div>

      {/* How it works */}
      <div className="container text-center my-5">
        <h2 className="mb-4" style={{ color: '#FF5722', fontWeight: 'bold' }}>How It Works</h2>
        <div className="row g-4">
          {/* Step 1 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow" style={{ background: 'linear-gradient(135deg, #FFCDD2, #F8BBD0)', color: '#880E4F' }}>
              <div className="card-body">
                <div style={{ fontSize: '2rem' }}>🛒</div>
                <h5 className="card-title mt-2">1. Buy a Product</h5>
                <p className="card-text">Choose your favorite item from our store and place an order.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow" style={{ background: 'linear-gradient(135deg, #C5CAE9, #BBDEFB)', color: '#0D47A1' }}>
              <div className="card-body">
                <div style={{ fontSize: '2rem' }}>🎟️</div>
                <h5 className="card-title mt-2">2. Get a Lucky Code</h5>
                <p className="card-text">Every product purchase gives you a unique lucky draw number.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow" style={{ background: 'linear-gradient(135deg, #C8E6C9, #A5D6A7)', color: '#1B5E20' }}>
              <div className="card-body">
                <div style={{ fontSize: '2rem' }}>🏆</div>
                <h5 className="card-title mt-2">3. Win Prizes</h5>
                <p className="card-text">Winners are selected via random lucky draw every week!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Jackpot Cards */}
      <div className="container my-5">
        <h2 className="text-center mb-4">🔥 Mega Jackpot Draws 🔥</h2>
        <div className="d-flex justify-content-center flex-wrap">
          <JackpotCard title="Mega Jackpot 1" prize="₹1,00,000" drawDate="April 20, 2025" deadline="2025-04-18T23:59:59" imageUrl="/images/Jackpot.jpg" KismatKholo="₹ 99/-" />
          <JackpotCard title="Mega Jackpot 2" prize="₹50,000" drawDate="April 25, 2025" deadline="2025-04-23T23:59:59" imageUrl="/images/Jackpot.jpg" KismatKholo="₹ 49/-" />
          <JackpotCard title="Mega Jackpot 3" prize="₹25,000" drawDate="April 30, 2025" deadline="2025-04-28T23:59:59" imageUrl="/images/Jackpot.jpg" KismatKholo="₹ 29/-" />
          <JackpotCard title="Mega Jackpot 4" prize="Smartphone" drawDate="May 5, 2025" deadline="2025-05-03T23:59:59" imageUrl="/images/Jackpot.jpg" KismatKholo="₹ 11/-" />
        </div>
      </div>

      {/* Recent Winners Section */}
      {/* Winners Section */}
      <div className="winners-section container my-5">
        <h2 className="winners-heading">🎉 Latest Lucky Draw Winners 🎉</h2>
        <div className="row">
          {winners.map((winner, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="winner-card">
                <div className="winner-name">{winner.name}</div>
                <div className="winner-details">
                  🕒 {winner.timeAgo} <br />
                  💰<strong> Won: {winner.amount}</strong> <br />
                  📅 Draw: {winner.drawDate}
                </div>
                <div className="winner-lottery" style={{marginTop: "8px", fontWeight: "bold"}}>
            Lottery No : {winner.Numbers.join(', ')}
          </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
