import React, { Component } from "react";
import "./App.css";

import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return <Palette palette={generatePalette(seedColors[4])} />;
  }
}

export default App;
