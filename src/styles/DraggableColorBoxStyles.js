import chroma from "chroma-js";
import sizes from "./sizes";

const styles = {
  root: {
    position: "relative",
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-6px",
    oveflow: "hidden",
    "&:hover svg": {
      color: "#fff"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%"
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%"
    }
  },
  boxContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    padding: "10px",
    width: "100%",
    bottom: "0px",
    left: "0px",
    color: (props) =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(255,255,255, 0.8)"
        : "rgba(0,0,0,0.6)",
    letterSpacing: "1px",
    fontSize: "12px",
    textTransform: "uppercase"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};

export default styles;
