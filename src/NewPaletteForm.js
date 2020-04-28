import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { arrayMove } from "react-sortable-hoc";

import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";

import seedColors from "./seedColors";

import DraggableColorList from "./DraggableColorList";

import styles from "./styles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
  static defaultProps = { maxColors: 20 };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: seedColors[0].colors
    };

    this.addNewColor = this.addNewColor.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  addNewColor(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ""
    });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(newPaletteName) {
    const newPalette = {
      colors: this.state.colors,
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-")
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }
  removeColor(colorName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName)
    });
  }
  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  }
  clearPalette() {
    this.setState({ colors: [] });
  }
  addRandomColor() {
    const allColors = this.props.palettes.map((p) => p.colors).flat();
    const randNum = Math.floor(Math.random() * allColors.length);
    this.setState({ colors: [...this.state.colors, allColors[randNum]] });
  }
  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={this.clearPalette}>
                Clear Palette
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={this.addRandomColor}
                disabled={paletteFull}>
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              paletteFull={paletteFull}
              addNewColor={this.addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}>
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={10}
          />
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
