import React from "react";
import { Container, Typography } from "@mui/material";
import { classes } from "./Style";
import NewspaperIcon from "@mui/icons-material/Newspaper";
export default function Head({ color }) {
  return (
    <Container maxWidth="md" sx={classes.con}>
      <NewspaperIcon sx={classes.icon} style={{ color: `${color}` }} />
      <Typography variant="h3" sx={classes.head} style={{ color: `${color}` }}>
        NYT Articles
      </Typography>
    </Container>
  );
}
