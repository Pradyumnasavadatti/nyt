import { Container } from "@mui/material";
import React from "react";
import Head from "./Head";
import { classes } from "./Style";
export default function Index({ color }) {
  return (
    <Container
      justify="center"
      align="center"
      maxWidth="md"
      sx={classes.container}
    >
      <Head color={color} />
    </Container>
  );
}
