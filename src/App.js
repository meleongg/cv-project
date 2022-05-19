import "./styles/reset.css";
import "./styles/styles.css";
import React, { Component } from "react";
import uniqid from "uniqid";

import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
      educations: [],
      wexs: [],
    }
  }

  render() {
    return (
    <div id="main-container">
      <Header /> 
      <div id="inside-container">
        <p>Hello world! </p>
      </div>
    </div>
  );
  }
}

export default App;
