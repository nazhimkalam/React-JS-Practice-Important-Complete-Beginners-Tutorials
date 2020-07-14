import React from "react";
import "./style.css";
function Contacts(properties) {
  return (
    <div className="contactItem">
      <img
        src={require(`${properties.details.imageUrl}`)}
        width="150px"
        height="150px"
        alt="person 1"
      />
      <h3>Name: {properties.details.Name} </h3>
      <p>Email: {properties.details.Email}</p>
      <p>Phone Number: {properties.details.PhoneNumber} </p>
    </div>
  );
}

export default Contacts;
