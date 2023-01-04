const classes = {
  icon: {
    width: { xs: "9%", md: "10%" },
    height: { xs: "9%", md: "10%" },
    color: "purple",
  },
  icon2: {
    width: { xs: "12%", md: "15%" },
    height: { xs: "12%", md: "15%" },
    color: "purple",
  },
  iconSpecial: {
    width: { xs: "15%", md: "20%" },
    height: { xs: "15%", md: "20%" },
    color: "purple",
  },
  box: {
    backgroundColor: "rgba(128,0,128,0.4)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.5vmax",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
    },
  },
  box2: {
    width: "fit-content",
    height: "80%",
    minHeight: "15vh",
    backgroundColor: "rgba(128,0,128,0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "rgb(156,39,176,1)",
  },
  txtp: {
    color: "rgb(156,39,176,0.7)",
  },
  media: {
    backgroundColor: "rgba(128,0,128,0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5vmax",
    transition: "all 0.5s",
  },
  subMedia: {
    backgroundColor: "rgba(128,0,128,0.4)",
    padding: "0.5vmax",
    borderRadius: "10vmax",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 1s",
    "&:hover": {
      transform: "scaleX(1.02)",
    },
  },
  mediaIcon: {
    width: "10%",
    height: "10%",
    color: "rgba(156,39,176,1)",
  },
  txtContainer: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export { classes };
