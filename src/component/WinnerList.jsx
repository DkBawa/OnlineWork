import React, { useEffect, useState } from "react";
import axios from "axios";

const WinnerList = () => {
  const [winners, setWinners] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/winners", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setWinners(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.error(err);
        setError("Error fetching winners");
      }
    };

    fetchWinners();
  }, []);

  const handleSearchClick = () => {
    const keyword = search.toLowerCase();

    const filteredData = winners.filter((winner) => {
      const name = winner.userId?.name?.toLowerCase() || "";
      const lottery = winner.lotteryNumber?.toLowerCase() || "";
      const date = new Date(winner.drawDate).toISOString().split("T")[0];

      const matchSearch =
        name.includes(keyword) || lottery.includes(keyword);

      const matchDate = selectedDate ? date === selectedDate : true;

      return matchSearch && matchDate;
    });

    setFiltered(filteredData);
    setActiveFilter(keyword || selectedDate);
  };

  const resetFilter = () => {
    setSearch("");
    setSelectedDate("");
    setFiltered(winners);
    setActiveFilter("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🏆 Declared Winners</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search by name or number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "40%" }}
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{ marginLeft: "10px", padding: "8px" }}
        />
        <button
          onClick={handleSearchClick}
          style={{ marginLeft: "10px", padding: "8px" }}
        >
          Search
        </button>
        <button
          onClick={resetFilter}
          style={{ marginLeft: "10px", padding: "8px" }}
        >
          Reset
        </button>
      </div>

      {activeFilter && (
        <p>
          <strong>Filtered by:</strong> <i>{activeFilter}</i>
        </p>
      )}

      {error && <p>{error}</p>}

      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Lottery Number</th>
            <th>Draw Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((winner, index) => {
            const isHighlighted = activeFilter !== "";
            return (
              <tr
                key={index}
                style={{
                  backgroundColor: isHighlighted ? "#fff3cd" : "transparent",
                  fontWeight: isHighlighted ? "bold" : "normal",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <td>{winner.userId?.name || "N/A"}</td>
                <td>{winner.lotteryNumber}</td>
                <td>{new Date(winner.drawDate).toLocaleDateString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WinnerList;
