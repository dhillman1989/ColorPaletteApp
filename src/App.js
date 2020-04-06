import React, { Component } from "react";
import "./App.css";

import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return <Palette {...seedColors[2]} />;
  }
}

export default App;
