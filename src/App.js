import React, { Component } from "react";
import "./App.css";

import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return <Palette {...seedColors[4]} />;
  }
}

export default App;
