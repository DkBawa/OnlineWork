// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import LotteryProducts from './pages/LotteryProducts';
// import AdminPanel from './pages/AdminPanel';
import AdminPurchases from './pages/AdminPurchases';
import WinnerList from './component/WinnerList';
import Winners from './pages/Winners';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyTickets from './pages/MyTickets';

// Admin
import AdminPan from './admin/AdminPan';
import DashAdmin from './admin/DashAdmin';
import AdPurchases from './admin/AdPurchases';
import AdWinners from './admin/AdWinners';

// import DashboardLayout from "./component/layout/DashboardLayout";

import './App.css';

// function Home() {
//   const [msg, setMsg] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/')
//       .then(res => res.text())
//       .then(data => setMsg(data));
//   }, []);

//   return (
//     <div className="App">
//       <h1>{msg}</h1>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="/mytickets" element={<MyTickets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* //Admin */}
        <Route path="/admin" element={<AdminPan />}>
          <Route path="dashadmin" element={<DashAdmin />} />
          <Route path="adpurchases" element={<AdPurchases />} />
          <Route path="adwinners" element={<AdWinners />} />
        </Route>

   

        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/recover" element={<RecoverPassword />} /> */}
        {/* /* Protected/Admin Routes */}
        <Route path="/Home" element={<Home />} />
        <Route path="/products" element={<LotteryProducts />} />
        {/* <Route path="/admin" element={<AdminPanel />} /> */}
        <Route path="/admin/purchases" element={<AdminPurchases />} />
        <Route path="/admin/winners" element={<WinnerList />} />

      </Routes>
    </Router>

  );
}

export default App;
