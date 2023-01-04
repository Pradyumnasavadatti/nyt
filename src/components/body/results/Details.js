import {
  Container,
  Grid,
  LinearProgress,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { classes } from "./Style";
import BookmarkBorderSharpIcon from "@mui/icons-material/BookmarkBorderSharp";
import DateRangeSharpIcon from "@mui/icons-material/DateRangeSharp";
import PersonIcon from "@mui/icons-material/Person";
import SubjectIcon from "@mui/icons-material/Subject";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import { useLocation } from "react-router-dom";
export default function Details() {
  const nav = useLocation();
  const [info, setInfo] = useState();
  useEffect(() => {
    setInfo(nav.state.info);
  }, []);

  return (
    <Container xs={12} sx={classes.main}>
      {info != undefined ? (
        <Grid
          container
          xs={12}
          md={10}
          spacing={2}
          style={{
            marginTop: "0.5vh",
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Grid item xs={12} md={10}>
            <Box sx={classes.head}>
              <Typography variant="h4">
                {info.headline.main ? info.headline.main : "Oops! No heading"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={10}>
            <Box sx={classes.head} style={{ padding: "0.5vmax" }}>
              <Typography variant="subtitle2">
                {info.abstract ? info.abstract : "Oops! No abstract"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={classes.head} style={{ padding: "0.5vmax" }}>
              <PersonIcon />
              <Box sx={classes.smallBox}>
                <Typography variant="caption">
                  {info.byline.original
                    ? info.byline.original
                        .substring(3, 15)
                        .concat(
                          info.byline.original.length - 3 > 15 ? "..." : ""
                        )
                    : "Anonymous"}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={classes.head} style={{ padding: "0.5vmax" }}>
              <DateRangeSharpIcon />
              <Box sx={classes.smallBox}>
                <Typography variant="caption">
                  {info.pub_date ? info.pub_date.substring(0, 10) : "Not found"}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={classes.head} style={{ padding: "0.5vmax" }}>
              <SubjectIcon />
              <Box sx={classes.smallBox}>
                <Typography variant="caption">
                  {info.section_name ? info.section_name : "General"}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={10}>
            <Box sx={classes.content}>
              {info.multimedia.length > 0 ? (
                <>
                  <Box sx={classes.img}>
                    <img
                      src={`https://static01.nyt.com/${info.multimedia[0].url}`}
                      width="100%"
                      height="100%"
                      style={{ backgroundSize: "contain" }}
                    />
                  </Box>
                  <Box sx={classes.imgContent}>
                    {info.lead_paragraph ? (
                      <Typography variant="p">{info.lead_paragraph}</Typography>
                    ) : (
                      <Typography variant="h3">Oops! No Data</Typography>
                    )}
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={classes.img2}>
                    <BrokenImageIcon sx={classes.noImg} />
                  </Box>
                  <Box sx={classes.imgContent2}>
                    {info.lead_paragraph ? (
                      <Typography variant="p">{info.lead_paragraph}</Typography>
                    ) : (
                      <Typography
                        variant="h5"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        Oops! No Data
                      </Typography>
                    )}
                  </Box>
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={10}>
            <Box
              sx={classes.content}
              style={{
                padding: "1vmax",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <BookmarkBorderSharpIcon />
              <Link
                href={info.web_url ? info.web_url : "http://nytimes.com"}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                }}
              >
                Read full article
              </Link>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <LinearProgress sx={classes.progress} />
      )}
    </Container>
  );
}
