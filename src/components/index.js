import React, { useContext, useEffect } from "react";
import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import Head from "./heading/index";
import Footer from "./footer/Footer";
import { classes } from "./Style.js";
import Search from "./body/search/Search";
import Top from "./body/card/Top";
import Most from "./body/card/Most";
import { useNavigate } from "react-router-dom";
import context from "../context/Context";
export default function Index() {
  const nav = useNavigate();
  const [point, setPoint, load, setLoad] = useContext(context);
  const handleClick = (querry) => {
    setPoint(1);
    nav("/result", { state: { querry: querry } });
  };
  useEffect(() => {
    if (load.status == 1) {
      let timer = setTimeout(() => {
        setLoad((prev) => ({ status: 0, flag: false }));
        clearTimeout(timer);
      }, 40000);
    }
  }, []);
  return (
    <Container maxWidth="xl" sx={classes.main}>
      <Head color="#9c27b0" />
      {load.flag == false ? (
        <Grid sx={classes.grid} container xs={12} md={8} spacing={2}>
          <Search onHandle={handleClick} />
          <Top
            title="Arts articles"
            subHead="Top articles related to arts "
            onClick={handleClick}
            type="arts"
          />
          <Top
            title="Science articles"
            subHead="Top articles related to science "
            onClick={handleClick}
            type="science"
          />
          <Top
            title="World articles"
            subHead="Top articles related to world"
            onClick={handleClick}
            type="world"
          />
          <Most onClick={handleClick} type="facebook" />
        </Grid>
      ) : (
        <Grid
          sx={classes.grid}
          style={{
            padding: "2vmax",
            display: "flex",
            justifyContent: "center",
          }}
          container
          xs={12}
          md={8}
          spacing={2}
        >
          <LinearProgress
            style={{ width: "80%", height: "2px" }}
            color="secondary"
          />
          {load.status == 1 && (
            <Typography
              variant="subtitle2"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Cooldown time! wait for some time
            </Typography>
          )}
        </Grid>
      )}
      <Footer />
    </Container>
  );
}
