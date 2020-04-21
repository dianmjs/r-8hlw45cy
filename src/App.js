import React, { Component } from "react";
import "./App.css";
import { ShallowWrapper } from "enzyme";

class App extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleHide = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    if (this.state.show) {
      return (
        <div className="wrapper">
          <label>
            <input type="checkbox" onClick={this.handleHide} />
            Mostrar información importante
          </label>
          <p value={this.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <label>
            <input type="checkbox" onClick={this.handleShow} />
            Mostrar información importante
          </label>
        </div>
      );
    }
  }
}

export default App;
