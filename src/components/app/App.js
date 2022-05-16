import { Button, Typography } from "@mui/material";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Typography sx={{ color: "primary.main" }}> Spotify Clone</Typography>
      <Button variant="contained">Click me</Button>
    </div>
  );
}

export default App;
