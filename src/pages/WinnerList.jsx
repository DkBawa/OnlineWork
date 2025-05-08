import React from 'react';
import '.Home/css'
const winners = [
  { name: 'Amit Sharma', prize: '₹1,00,000', date: 'April 10, 2025' },
  { name: 'Neha Verma', prize: '₹50,000', date: 'April 11, 2025' },
  { name: 'Ravi Kumar', prize: '₹25,000', date: 'April 12, 2025' },
  { name: 'Sonal Mehta', prize: '₹75,000', date: 'April 13, 2025' },
  { name: 'Vikram Desai', prize: '₹60,000', date: 'April 14, 2025' },
];

const WinnerList = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 flex-nowrap px-4 pb-6">
        {winners.map((winner, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-blur-lg shadow-xl rounded-xl p-5 min-w-[250px] text-center border border-white border-opacity-30 transition-transform hover:scale-105 duration-300"
          >
            <h3 className="text-lg font-bold text-purple-800">{winner.name}</h3>
            <p className="text-md font-semibold text-pink-600">{winner.prize}</p>
            <p className="text-sm text-gray-700">{winner.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinnerList;
