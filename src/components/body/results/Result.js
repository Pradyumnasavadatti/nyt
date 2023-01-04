import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { classes } from "./Style";
import Head from "../../heading/index";
import { getArticle } from "../../../api/Data";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { useLocation, useNavigate } from "react-router-dom";
import context from "../../../context/Context";

export default function Result() {
  const nav = useLocation();
  const [point, setPoint, load, setLoad] = useContext(context);
  const [data, setData] = useState();
  const [pageCount, setPageCount] = useState(point - 1);
  const [loading, setLoading] = useState(true);
  const [able, setAble] = useState(false);

  const navigate = useNavigate();
  const get = async () => {
    setLoading(true);
    setAble(true);
    try {
      setData(await getArticle(nav.state.querry, pageCount));
    } catch {
      setLoad((prev) => ({ ...prev }, { status: 1 }));
      navigate("/", { replace: true });
    }
    setLoading(false);
  };
  useEffect(() => {
    get();
    let timer = setTimeout(() => {
      setAble(false);

      clearTimeout(timer);
    }, 4000);
  }, [pageCount]);
  const handleChange = (e, page) => {
    setPageCount(page - 1);
    setPoint(page);
  };
  const handleClick = (info) => {
    navigate("/details", { state: { info: info } });
  };
  return (
    <Container maxWidth="xl" sx={classes.main}>
      <Head color="rgba(255,255,255,0.5)" />
      <Grid container xs={12} md={8} spacing={1} style={{ marginTop: "0.5vh" }}>
        {loading !== true ? (
          data != undefined ? (
            data.data.response.docs.length > 0 ? (
              data.data.response.docs.map((val, ind) => (
                <Grid key={ind} item xs={12} md={6}>
                  <Box
                    sx={classes.box}
                    onClick={() => {
                      handleClick(val);
                    }}
                  >
                    <AcUnitRoundedIcon sx={classes.icon} />
                    <Typography variant="p">
                      {val.headline.main.substring(0, 20)}
                      {val.headline.main.length > 20 ? "..." : null}
                    </Typography>
                    <NavigateNextRoundedIcon />
                  </Box>
                </Grid>
              ))
            ) : (
              <Grid item xs={12} md={12}>
                <Box
                  sx={classes.box}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{ color: "rgba(156,39,176,0.7)" }}
                  >
                    No data!
                  </Typography>
                </Box>
              </Grid>
            )
          ) : (
            <Grid item xs={12} md={12}>
              <Box
                sx={classes.box}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0)",
                }}
              >
                <LinearProgress color="secondary" sx={classes.progress} />
              </Box>
            </Grid>
          )
        ) : (
          <Grid item xs={12} md={12}>
            <Box
              sx={classes.box}
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            >
              <LinearProgress color="secondary" sx={classes.progress} />
            </Box>
          </Grid>
        )}
        <Grid item xs={12}>
          <Box sx={classes.box2}>
            <Pagination
              variant="text"
              color="secondary"
              page={point}
              disabled={able}
              count={
                data != undefined
                  ? Number(data.data.response.meta.hits) > 100
                    ? 10
                    : Number(data.data.response.meta.hits) / 10 - 1
                  : 0
              }
              shape="rounded"
              style={{
                backgroundColor: "rgba(255,255,255,0.4)",
                padding: "0.5vmax",
                borderRadius: "10vmax",
              }}
              onChange={handleChange}
            ></Pagination>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
