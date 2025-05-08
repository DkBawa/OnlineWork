import React, { useState } from "react";
import axios from "axios";

const WinnerForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    lotteryNumber: "",
    drawDate: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post("http://localhost:5000/api/winners/declare", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("🎉 Winner declared successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage("❌ Error declaring winner.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>🎯 Declare Winner</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Lottery Number:</label>
          <input
            type="text"
            name="lotteryNumber"
            value={formData.lotteryNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Draw Date:</label>
          <input
            type="date"
            name="drawDate"
            value={formData.drawDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Declare Winner</button>
      </form>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
};

export default WinnerForm;
