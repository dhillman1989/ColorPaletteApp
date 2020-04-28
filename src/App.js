import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

import Palette from "./Palette";
import PaletteList from "./PaletteList";
import NewPaletteForm from "./NewPaletteForm";
import SingleColorPalette from "./SingleColorPalette";
import Page from "./Page";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes:
        !savedPalettes || savedPalettes.length === 0
          ? seedColors
          : savedPalettes
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  deletePalette(id) {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== id)
      }),
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={700}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={(rp) => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={seedColors}
                        {...rp}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={(rp) => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...rp}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={(rp) => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(rp.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  path="/palette/:paletteId/:colorId"
                  render={(rp) => (
                    <Page>
                      <SingleColorPalette
                        colorId={rp.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(rp.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  render={(rp) => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...rp}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
