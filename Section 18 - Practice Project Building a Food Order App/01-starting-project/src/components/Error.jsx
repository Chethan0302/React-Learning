import React from "react";

const Error = ({ title, msg }) => {
  return (
    <div className="center">
      <h2>{title}</h2>
      <p>{msg}</p>
    </div>
  );
};

export default Error;
