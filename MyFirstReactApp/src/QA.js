import React from "react";

function QA(prop) {
  return (
    <div>
      {/* If i don't have a question i should no display this line */}
      <h3 style={{ display: prop.question ? "block" : "none" }}>
        {/* condtion then do this else do this */} {/* ? = then, : = else */}
        Question: {prop.question}
      </h3>
      {/* Due to absence of the question then the answer has to also be differntiated from the rest */}
      <h3 style={{ color: prop.question ? "red" : "#888888" }}>
        Answer: {prop.answer}
      </h3>{" "}
    </div>
  );
}

export default QA;
