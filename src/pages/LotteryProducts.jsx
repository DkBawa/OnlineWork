import React, { useState } from 'react';
import Navbar from '../component/layout/Navbar';
import Footer from '../component/Footer';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductCard.css';



const products = [
  { id: 1, name: 'Healthy Diet Chart', price: 49, image: '/images/diet-chart.png',pdf: '/pdfs/healthy-diet-chart.pdf' },
  { id: 2, name: 'Money Mantra', price: 99, image: '/images/Money-mantra.png' },
  { id: 3, name: 'Yoga Guide', price: 129, image: '/images/yoga-guide.png' },
  { id: 4, name: 'Coding for Beginners', price: 199, image: '/images/coding-guide.png' },
  { id: 5, name: 'Digital Marketing Ebook', price: 149, image: '/images/digital-marketing.png' },
  { id: 6, name: 'Motivational Speaker Ebook', price: 79, image: '/images/motivation.png' },
  { id: 7, name: 'Fitness Tracker Guide', price: 59, image: '/images/fitness.png' },
  { id: 8, name: 'Stock Market Basics', price: 99, image: '/images/stock-market.png' },
  { id: 9, name: 'Photography Guide', price: 89, image: '/images/photography-guide.png' },
  { id: 10, name: 'Travel Guide for India', price: 119, image: '/images/travel-guide.png' },
];

export default function LotteryProducts() {
  const [loading, setLoading] = useState(false);
  const [lotteryNo, setLotteryNo] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const confirmPayment = async () => {
    setLoading(true);
    setLotteryNo('');

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post('http://localhost:5000/api/lottery/buy',
        {
          productName: selectedProduct.name,
          productPrice: selectedProduct.price,
          pdfUrl: selectedProduct.pdf
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = response.data;

      if (data.lotteryNumber) {
        setLotteryNo(data.lotteryNumber);
        alert(`Ebook sent to your email!\nYour Lottery No: ${data.lotteryNumber}`);
        setSelectedProduct({ name: 'Healthy Diet Chart', price: 49 }); // Reset selected product
      } else {
        alert(data.msg || 'Something went wrong');
      }

    } catch (err) {
      console.error("Purchase Error:", err);
      alert(err.response?.data?.msg || 'Error during purchase.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="container py-5 mt-4">
      <h2 className="text-center mb-4">🎁 Choose Your Virtual Product 🎁</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm text-center">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text fw-bold text-success">₹{product.price}</p>
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="btn btn-primary mt-2"
                >
                  Buy & Enter Lottery
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>



      {selectedProduct && (
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Dummy Payment</h5>
                <button type="button" className="close" onClick={() => setSelectedProduct(null)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Pay ₹{selectedProduct.price} for <strong>{selectedProduct.name}</strong></p>
              </div>
              <div className="modal-footer">
                <button
                  onClick={confirmPayment}
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading ? 'Processing...' : 'Pay Now'}
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {lotteryNo && (
        <div className="mt-4 text-center">
          <h4 className="text-success">🎉 Your Lottery Number: {lotteryNo}</h4>
        </div>
      )}
    </div>

<Footer/>
    </>
  );
}
