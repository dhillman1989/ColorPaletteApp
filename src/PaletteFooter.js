import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles/PaletteFooterStyles";

function PaletteFooter(props) {
  const { paletteName, classes } = props;

  return <footer className={classes.PaletteFooter}>{paletteName}</footer>;
}

export default withStyles(styles)(PaletteFooter);
