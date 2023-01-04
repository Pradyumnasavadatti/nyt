import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { classes, styles } from "./Style";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
export default function Most({ onClick, type }) {
  return (
    <Grid item columns={1} xs={12}>
      <Box
        sx={classes.media}
        onClick={() => {
          onClick(type);
        }}
      >
        <Box sx={classes.subMedia}>
          <FacebookRoundedIcon sx={classes.mediaIcon} />
          <Box sx={classes.txtContainer}>
            <Typography variant="h6" sx={classes.txt}>
              Most popular on Facebook
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
