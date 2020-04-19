import chroma from "chroma-js";
import sizes from "./sizes";

export default {
  ColorBox: {
    width: "20%",
    height: props => (props.showFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: props => (props.showFullPalette ? "20%" : "33.3333%")
    },
    [sizes.down("md")]: {
      width: "50%",
      height: props => (props.showFullPalette ? "10%" : "20%")
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: props => (props.showFullPalette ? "5%" : "10%")
    }
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    bottom: "0px",
    left: "0px",
    color: "#000",
    letterSpacing: "1px",
    fontSize: "12px",
    textTransform: "uppercase"
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
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)"
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
    transition: "transform 1.5s ease-in-out"
  },
  copyMsg: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    fontSize: "3rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "#fff",
    "& h1": {
      width: "100%",
      textAlign: "center",
      fontWeight: "400",
      textShadow: "1px 2px #000",
      background: "rgba(255, 255, 255, 0.2)",
      padding: "1rem",
      [sizes.down("lg")]: {
        fontSize: "6rem"
      },
      [sizes.down("md")]: {
        fontSize: "4.5rem"
      },
      [sizes.down("xs")]: {
        fontSize: "3rem"
      }
    },
    "& p": {
      fontSize: "2.5rem",
      fontWeight: "100"
    }
  },
  showMsg: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.4s"
  }
};
