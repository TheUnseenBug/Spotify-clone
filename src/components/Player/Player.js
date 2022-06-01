import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateSongInfoStart } from "../../store/actions/index";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import PlayerControls from "../PlayerControls/PlayerControls";
import VolumeControls from "../VolumeControls/VolumeControls";

const Player = ({ spotifyApi, updateSongInfoStart, title, artist, image }) => {
  const sliderStyle = {
    color: "#fff",
    height: 4,
    padding: 0,
    width: "100%",
    "& .Mui-focusVisible": {
      boxShadow: "none",
    },
    "& .MuiSlider-thumb": {
      width: 0,
      height: 0,
      "&:hover": {
        boxShadow: "none",
      },
      "&:focus": {
        boxShadow: "none",
      },
    },
    "&:hover": {
      "& .MuiSlider-track": {
        backgroundColor: "primary.main",
      },
      "& .MuiSlider-thumb": {
        width: 12,
        height: 12,
      },
    },
    "& .MuiSlider-track": {
      border: "none",
    },
  };

  useEffect(() => {
    updateSongInfoStart(spotifyApi);
    spotifyApi.getMySavedTracks({ limit: 10, offset: 0 }).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <Box>
      <Grid
        container
        px={3}
        sx={{
          bgcolor: "Background.paper",
          height: 100,
          width: "100%",
          borderTop: "1px solid #292929",
        }}
      >
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Avatar
            src={image?.url}
            alt={title}
            variant="square"
            sx={{ width: 56, height: 56, marginRight: 2 }}
          />
          <Box>
            <Typography sx={{ color: "text.primary", fontSize: 14 }}>
              {title}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
              {artist}
            </Typography>
          </Box>
        </Grid>
        <PlayerControls sliderStyle={sliderStyle} spotifyApi={spotifyApi} />
        <VolumeControls sliderStyle={sliderStyle} spotifyApi={spotifyApi} />
      </Grid>
    </Box>
  );
};

const mapState = (state) => {
  const { title, artist, image } = state.player;
  return {
    title,
    image,
    artist,
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateSongInfoStart: (api) => dispatch(updateSongInfoStart(api)),
  };
};

export default connect(mapState, mapDispatch)(Player);
