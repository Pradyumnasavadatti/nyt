import { Divider, Link } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Divider
        style={{
          width: "60%",
          height: "0.3vh",
          marginTop: 20,
          backgroundColor: "#9c27b0",
        }}
      />
      <Link
        variant="p"
        style={{ color: "#9c27b0", textDecoration: "none" }}
        href="https://github.com"
      >
        @Pradyumna Savadatti
      </Link>
    </>
  );
}
