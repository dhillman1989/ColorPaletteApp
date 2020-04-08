import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import Navbar from "./Navbar";
import "./Palette.css";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  PaletteColors: {
    height: "90%"
  },
  PaletteFooter: {
    backgroundColor: "#fff",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    padding: "0 5px"
  }
};

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { classes } = this.props;
    const { colors, paletteName, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        key={color.id}
        name={color.name}
        id={color.id}
        paletteId={id}
        showFullPalette={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showSlider={true}
        />
        <div className={classes.PaletteColors}>{colorBoxes}</div>s
        <PaletteFooter
          className={classes.PaletteFooter}
          paletteName={paletteName}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
