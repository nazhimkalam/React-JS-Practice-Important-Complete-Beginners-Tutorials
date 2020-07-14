import React from "react";

function APIinfo(prop) {
  return (
    <div>
      <h2 style={{ display: prop.name ? "display" : "none" }}>
        Name: {prop.name}
      </h2>

      {/* The style code indicates that the 'Name' is a mandatory requirement, if not reprent it displays nothing */}

      <h3 style={{ display: prop.name ? "display" : "none" }}>
        Age: {prop.age}
      </h3>

      {/* The style code indicates that the 'Name' is a mandatory requirement, if not reprent it displays nothing */}
    </div>
  );
}

export default APIinfo;
