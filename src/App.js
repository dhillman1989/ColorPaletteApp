import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
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
        <Route
          path="/palette/:paletteId/:colorId"
          render={rp => (
            <SingleColorPalette
              colorId={rp.match.params.colorId}
              palette={generatePalette(
                this.findPalette(rp.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
