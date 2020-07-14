import React from "react";

function Food(prop) {
  return (
    <div className = 'xxx'>
      <div>
        <label>
          {prop.name} <input type="checkbox" checked={prop.select} />
        </label>
      </div>
    </div>
  );
}

export default Food;
