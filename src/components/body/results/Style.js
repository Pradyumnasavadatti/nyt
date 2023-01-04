const classes = {
  main: {
    padding: "2vmax",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "rgba(128,0,128,0.4)",
    padding: "1vmax",
    color: "rgba(255,255,255,0.7)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      transform: "scale(1.01)",
      cursor: "pointer",
    },
  },
  box2: {
    backgroundColor: "rgba(128,0,128,0)",
    padding: "1vmax",
    color: "rgba(255,255,255,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    text: {
      color: "white",
    },
  },
  progress: {
    width: "50vw",
    height: "2px",
  },
  head: {
    backgroundColor: "rgba(128,0,128,0.4)",
    padding: "1vmax",
    color: "rgba(255,255,255,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(128,0,128,0.4)",
    padding: "2vmax",
    color: "rgba(255,255,255,0.7)",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: { xs: "100%", lg: "30%" },
    height: { xs: "100%", lg: "100%" },
    marginRight: { xs: "0%", md: "1vw" },
    marginBottom: { xs: "1vh", md: "0" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  imgContent: {
    width: { xs: "100%", md: "100%" },
    height: { xs: "100%", md: "100%" },
  },
  smallBox: {
    width: "70%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  noImg: {
    width: { xs: 0, md: "50%" },
    height: { xs: 0, md: "50%" },
  },
  img2: {
    width: { xs: "0%", md: "30%" },
    height: { xs: "0%", md: "100%" },
    marginRight: { xs: "0%", lg: "1vw" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContent2: {
    width: { xs: "100%" },
    height: { xs: "100%" },
  },
};

export { classes };
