const styles = {
  root: {
    position: "relative",
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-6px",
    "&:hover svg": {
      color: "#fff",
      transform: "scale(1.5)"
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
    color: "rgba(0,0,0,0.5)",
    letterSpacing: "1px",
    fontSize: "12px",
    textTransform: "uppercase"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};

export default styles;
