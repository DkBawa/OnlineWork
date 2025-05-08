import React from 'react';
import Navbar from '../component/layout/Navbar';
import Footer from '../component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const winners = [
  {
    name: 'Richard William',
    amount: '₹1,00,000',
    time: '2 minutes ago',
    date: '15/04/2025',
    numbers: [8, 10, 12, 13, 92],
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Anjali Mehta',
    amount: '₹75,000',
    time: '55 minutes ago',
    date: '15/04/2025',
    numbers: [6, 20, 49, 56, 2],
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Ravi Kumar',
    amount: '₹50,000',
    time: '1 hour ago',
    date: '15/04/2025',
    numbers: [9, 11, 13, 23, 1],
    image: 'https://randomuser.me/api/portraits/men/70.jpg',
  },
  {
    name: 'Richard William',
    amount: '₹1,00,000',
    time: '2 minutes ago',
    date: '15/04/2025',
    numbers: [8, 10, 12, 13, 92],
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Anjali Mehta',
    amount: '₹75,000',
    time: '55 minutes ago',
    date: '15/04/2025',
    numbers: [6, 20, 49, 56, 2],
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Ravi Kumar',
    amount: '₹50,000',
    time: '1 hour ago',
    date: '15/04/2025',
    numbers: [9, 11, 13, 23, 1],
    image: 'https://randomuser.me/api/portraits/men/70.jpg',
  },
];

const Winners = () => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #C8E6C9, #A5D6A7)', color: '#1B5E20', minHeight: '100vh' }}>
      <Navbar />

      {/* Header Text */}
      <div className="container text-center pt-5 my-5">
        <h2 className="fw-bold text-primary"> <strong>🔥 Winners 🔥</strong></h2>
        <p className="text-muted">
          <strong>Check out our latest lucky winners and their winning numbers!</strong>
        </p>
      </div>

      {/* Winners Grid */}
      <div className="container mb-5">
        <div className="row g-4">
          {winners.map((winner, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={winner.image}
                      alt={winner.name}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                      style={{ objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="mb-0">{winner.name}</h5>
                      <small className="text-muted">{winner.time}</small>
                    </div>
                  </div>
                  <p className="mb-1">
                    <strong>Amount:</strong> <span className="text-success">{winner.amount}</span>
                  </p>
                  <p className="mb-2">
                    <strong>Draw Date:</strong> {winner.date}
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    {winner.numbers.map((num, idx) => (
                      <span
                        key={idx}
                        className="badge bg-primary text-white rounded-pill px-3 py-2"
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Winners;

