import React, { Component } from "react";
import ReactDOM from "react-dom";


const Header = () => {
  return (
    <header>
      <h1>React Counter</h1>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <h4>This is a footer and stuff.</h4>
    </footer>
  );
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = e => {
    e.preventDefault("");
    let counter = (this.state.counter += 1);

    this.setState({ counter });
  };

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <input />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
