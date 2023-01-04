import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useRef } from "react";
import { class1 } from "./SearchStyle";
import ArticleIcon from "@mui/icons-material/Article";
import SearchIcon from "@mui/icons-material/Search";
export default function Search({ onHandle }) {
  let classes = class1();
  const querry = useRef();

  const handleClick = () => {
    if (querry.current.value.length > 0) {
      onHandle(querry.current.value);
    }
  };
  return (
    <Grid item xs={12} sx={classes.grid}>
      <TextField
        variant="filled"
        label="Enter article name"
        autoComplete="off"
        color="secondary"
        inputRef={querry}
        required={true}
        InputProps={{
          style: { color: "white" },
          startAdornment: (
            <InputAdornment position="start">
              <ArticleIcon style={{ color: "rgba(255,0,128,0.7)" }} />
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: { fontSize: 18, color: "rgba(255,255,255,0.6)" },
        }}
        InputLabelProps={{
          style: { fontSize: 23 },
        }}
        sx={classes.field}
        focused
      />
      <Button size="large" sx={classes.subContainer} onClick={handleClick}>
        <SearchIcon style={{ color: "white" }} />
      </Button>
    </Grid>
  );
}
