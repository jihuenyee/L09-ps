import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the School of Infocomm</h1>
      <p>Explore diplomas and register your interest in courses!</p>
      <Link to="/diplomas">View Diplomas</Link>
    </div>
  );
}

export default Home;