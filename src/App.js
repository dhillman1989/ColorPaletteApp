import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={rp => <PaletteList palettes={seedColors} {...rp} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={rp => (
            <Palette
              palette={generatePalette(this.findPalette(rp.match.params.id))}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
