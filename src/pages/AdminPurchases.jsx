// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminPurchases = () => {
//   const [purchases, setPurchases] = useState([]);

//   useEffect(() => {
//     const fetchPurchases = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/admin/purchases');
//         setPurchases(res.data);
//       } catch (err) {
//         console.error('Error fetching purchases:', err);
//       }
//     };

//     fetchPurchases();
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//         <h2>Admin Panel</h2>
//       <h2>All Purchases</h2>
//       <table border="1" cellPadding="10" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>Buyer Name</th>
//             <th>Email</th>
//             <th>Product</th>
//             <th>Lottery No</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {purchases.map(purchase => (
//             <tr key={purchase._id}>
//               <td>{purchase.buyerName}</td>
//               <td>{purchase.buyerEmail}</td>
//               <td>{purchase.productName}</td>
//               <td>{purchase.lotteryNumber}</td>
//               <td>{new Date(purchase.purchaseDate).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminPurchases;
