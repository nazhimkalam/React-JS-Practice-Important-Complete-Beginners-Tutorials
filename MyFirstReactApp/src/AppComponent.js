import React from "react";

// rendering means displays your content on the web browser

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Header username="Kalam_Nazhim" />
        <Greetings />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return <h1>{this.props.username}</h1>;
  }
}

class Greetings extends React.Component {
  render() {
    return (
      <h2>
        Welcome back <br />
        Good AfterNoon!!!
      </h2>
    );
  }
}

export default AppComponent;
