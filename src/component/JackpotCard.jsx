import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGift } from 'react-icons/fa';

const JackpotCard = ({ title, prize, drawDate, deadline, imageUrl ,KismatKholo }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = () => {
      const now = new Date();
      const deadlineTime = new Date(deadline);
      const diff = deadlineTime - now;

      if (diff > 0) {
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ minutes, seconds });
      } else {
        setTimeLeft({ minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(countdown, 1000);
    return () => clearInterval(timer);
  }, [deadline]);
//   <img src={imageUrl} className="card-img-top" alt="Jackpot" />
  return (
    <div className="card shadow text-center mx-2" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt="Jackpot" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>🎁 Prize: <strong>{prize}</strong></p>
        <p>📅 Draw Date: {drawDate}</p>
        <p>⏰ Time Left: {timeLeft.minutes}m {timeLeft.seconds}s</p>
        <p>🎁 Kismat Kholo :<strong>{KismatKholo}</strong></p>
        <Link to="/products" className="btn btn-warning">Buy Now</Link>
      </div>
    </div>
  );
};

export default JackpotCard;
