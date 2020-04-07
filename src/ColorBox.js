import React, { Component } from "react";
import "./ColorBox.css";

import { withStyles } from "@material-ui/styles";
import chroma from "chroma-js";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const styles = {
  ColorBox: {
    width: "20%",
    height: props => (props.showFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1"
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black"
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.07
        ? "rgba(0,0,0,0.6)"
        : "white",
    background: "rgba(255, 255, 255, 0.3)",
    padding: "10px",
    fontSize: "16px",
    position: "absolute",
    border: "none",
    bottom: "0",
    right: "0",
    width: "60px",
    height: "20px",
    textAlign: "center",
    lineHeight: "20px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.08
        ? "rgba(0,0,0,0.6)"
        : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    border: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    opacity: "0",
    textDecoration: "none"
  }
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {
      name,
      background,
      paletteId,
      id,
      showFullPalette,
      classes
    } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.06;
    const isLightColor = chroma(background).luminance() >= 0.06;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>copy</button>
          </div>
          {showFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
