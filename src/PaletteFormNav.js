import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { classes, open } = this.props;
    const { newPaletteName } = this.state;
    return (
      <div>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
            <div>
              <ValidatorForm
                onSubmit={() => this.props.handleSubmit(newPaletteName)}
              >
                <TextValidator
                  value={this.state.newPaletteName}
                  name="newPaletteName"
                  label="Palette Name"
                  onChange={this.handleChange}
                  validators={["required", "isNameUnique"]}
                  errorMessages={[
                    "Please provide a name for your new Palette",
                    "Palette Name already in use!"
                  ]}
                />
                <Button type="submit" variant="contained" color="primary">
                  Save Palette
                </Button>
                <Link to="/">
                  <Button variant="contained" color="secondary">
                    Go Back
                  </Button>
                </Link>
              </ValidatorForm>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default PaletteFormNav;
