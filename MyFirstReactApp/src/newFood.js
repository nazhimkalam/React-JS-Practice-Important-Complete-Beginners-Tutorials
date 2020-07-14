import React from "react";

function Food(prop) {
  // console.log(prop.item)
  let style = {
    textDecoration: prop.item.selected && "line-through",
    color: prop.item.selected ? "#cdcdcd" : "blue",
    fontSize : !prop.item.selected && "25px",
  };
  return (
    <div className="xxx">
      <div style={style}>
        {/* conditions in styling */}
        <label>
          {prop.item.name}
          <input
            type="checkbox"
            checked={prop.item.selected}
            onChange={() => prop.handleChange(prop.item.id)}
          />
        </label>
      </div>
    </div>
  );
}

export default Food;
