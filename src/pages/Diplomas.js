import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Diplomas() {
  const [diplomas, setDiplomas] = useState([]);

  useEffect(() => {
    // Simulated fetch for diplomas
    axios
      .get("/api/diplomas") // Replace with actual API endpoint
      .then((res) => setDiplomas(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="diplomas">
      <h1>Diplomas Offered</h1>
      <ul>
        {diplomas.map((diploma) => (
          <li key={diploma.id}>
            <Link to={`/diplomas/${diploma.id}`}>{diploma.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Diplomas;