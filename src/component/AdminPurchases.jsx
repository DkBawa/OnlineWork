// import { useEffect, useState } from 'react';

// export default function AdminDashboard() {
//   const [purchases, setPurchases] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/admin/purchases')
//       .then(res => res.json())
//       .then(data => setPurchases(data));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">🎯 Admin Dashboard</h1>
//       <table className="w-full border text-left">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-2">User</th>
//             <th className="p-2">Product</th>
//             <th className="p-2">Price</th>
//             <th className="p-2">Lottery No</th>
//             <th className="p-2">Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {purchases.map((item, idx) => (
//             <tr key={idx} className="border-t">
//               <td className="p-2">{item.user?.name}</td>
//               <td className="p-2">{item.productName}</td>
//               <td className="p-2">₹{item.productPrice}</td>
//               <td className="p-2">{item.lotteryNumber}</td>
//               <td className="p-2">{new Date(item.createdAt).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
