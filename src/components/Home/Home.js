import React from "react";
import { Button, Grid, Typography } from "@mui/material";

const Home = ({}) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Grid item xs={12} md={4}>
        <img src="/Images/Portfolio.webp" style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={6} md={6}>
        <Typography variant="h4" sx={{ color: "text.primary" }}>
          Hello and welcome to the Spotify Player!
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button
          size="large"
          variant="contained"
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/dennisgranheimer/")
          }
        >
          Portfolio
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
