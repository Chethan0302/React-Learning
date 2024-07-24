import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>My home page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <button onClick={() => navigate("/products")}>Navigate</button>
    </>
  );
};

export default Home;
