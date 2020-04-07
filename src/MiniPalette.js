import React from "react";
import { withStyles } from "@material-ui/styles";
import "./MiniPalette.css";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
    "& h1": {
      color: "red"
    }
  }
};

function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      <h1>MiniPalette</h1>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
