import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>Single Palette</h1>}
        />
      </Switch>
    );
  }
}

export default App;
