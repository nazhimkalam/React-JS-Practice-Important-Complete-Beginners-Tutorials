import React from "react";

class MemeBody extends React.Component {
  // using es6 we can initialize state directly
  state = {
    topText: "",
    bottomText: "",
    imageSrc: "./memeImages/5.jpg",
  };

  // using es6 arrow function method we can remove the binding we do in the constructor, cuz it does the binding for you
  HandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  Generate = () => {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    this.setState({ imageSrc: `./memeImages/${randomNumber}.jpg` });
  };
  render() {
    return (
      <div className="memeBody">
        <form onSubmit={this.Generate}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.HandleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.HandleChange}
          />
          <input
            type="button"
            className="button"
            value="GENERATE"
            onClick={this.Generate}
          />
        </form>
        <div className="image">
          <img
            src={require(`${this.state.imageSrc}`)}
            height="250px"
            width="450px"
            alt="memeImage"
          />
          <div className="textFlex">
            <div className="topText">{this.state.topText}</div>
            <div className="bottomText">{this.state.bottomText}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default MemeBody;
