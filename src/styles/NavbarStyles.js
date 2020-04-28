import sizes from "./sizes";

export default {
  Navbar: {
    display: "flex",
    height: "6vh",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logo: {
    padding: "0 13px",
    margin: "0 15px 0 0",
    background: "#eceff1",
    fontSize: "22px",
    color: "#000",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      color: "#000",
      textDecoration: "none"
    },
    [sizes.down("xs")]: {
      display: "none"
    }
  },
  slider: {
    width: "350px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-track": {
      background: "transparent"
    },
    "& .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover": {
      backgroundColor: "green",
      border: "1px solid rgb(1, 104, 6)",
      outline: "none",
      boxShadow: "none",
      marginTop: "-3px",
      height: "13px",
      width: "13px"
    },
    [sizes.down("sm")]: {
      width: "150px"
    }
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  }
};
