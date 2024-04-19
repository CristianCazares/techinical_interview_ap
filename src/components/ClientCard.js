import React from "react";
import "./ClientCard.css";

const ClientCard = ({ name, fLastName, email, status }) => {
  return (
    <div className="container">
      <h2 className="heading">
        {name} {fLastName ? fLastName : ""}
      </h2>
      <div className="info">
        <p>{email ? email : ""}</p>
        <p className={`${status} status`}>{status ? status : "PENDIENTE"}</p>
      </div>
    </div>
  );
};

export default ClientCard;
