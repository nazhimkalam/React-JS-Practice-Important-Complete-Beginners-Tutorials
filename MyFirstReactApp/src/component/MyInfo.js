import React from "react" // this is use because the content in the function is in JSX form

function MyInfo() {
    const myStyle = {
      color: "red",
      fontFamily: "Arial",
    };
    return (
      <div>
        <h1 style={myStyle}>Mohammed Nazhim Kalam</h1>
        <p style={{ fontStyle: "italic" }}>
          I am a undergraduate student persuing my bachelors degree on Software
          Engineering
        </p>
        <ul>
          <div style={{ color: "blue", fontFamily: "Arial" }}>
            <li>Australia</li>
            <li>Italy</li>
            <li>America</li>
          </div>
        </ul>
      </div>
    );
  }

  export default MyInfo