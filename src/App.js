import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import NewPaletteForm from "./NewPaletteForm";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }
  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={rp => (
            <NewPaletteForm
              savePalette={this.savePalette}
              palettes={this.state.palettes}
              {...rp}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={rp => <PaletteList palettes={this.state.palettes} {...rp} />}
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
