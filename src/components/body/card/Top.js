import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { classes } from "./Style";
import StarIcon from "@mui/icons-material/Star";

function Style({ title, subHead, onClick, type }) {
  return (
    <>
      <Grid item xs={12} md={6} lg={4} columns={2}>
        <Box
          sx={classes.box}
          onClick={() => {
            onClick(type);
          }}
        >
          <Box sx={classes.box2}>
            <StarIcon sx={classes.icon} />
            <StarIcon sx={classes.icon2} />
            <StarIcon sx={classes.iconSpecial} />
            <StarIcon sx={classes.icon2} />
            <StarIcon sx={classes.icon} />
          </Box>
          <Typography variant="h5" sx={classes.txt}>
            {title}
          </Typography>
          <Typography variant="p" sx={classes.txtp}>
            {subHead}
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

export default Style;
