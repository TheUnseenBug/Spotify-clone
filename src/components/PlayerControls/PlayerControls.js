import React, { useEffect } from "react";
import { formatTime } from "../../utils/Functions";
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@mui/icons-material";
import { IconButton, Grid, Stack, Typography, Slider } from "@mui/material";
import { connect } from "react-redux";
import { pause, playNewSong, setProgress } from "../../store/actions/index";

const PlayerControlls = ({
  sliderStyle,
  deviceId,
  pause,
  playing,
  duration,
  progress,
  loading,
  playNewSong,
  setProgress,
  spotifyApi,
}) => {
  const skipStyle = { width: 28, height: 28 };
  const songDuration = 195;

  const togglePlay = async () => {
    if (loading) return;

    if (!playing) {
      // Om musiken INTE Spelar
      try {
        playNewSong(spotifyApi, {});
      } catch (e) {
        console.error(e);
      }
    } else {
      // Om musiken Spelar
      pause();
      await spotifyApi.pause();
    }
  };

  return (
    <Grid
      item
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: { xs: "flex-end", md: "center" },
        alignItems: "center",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        justify="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Stack
          spacing={1}
          direction="row"
          justifyContent={"center"}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <IconButton size="small" sx={{ color: "text.primary" }}>
            <SkipPrevious sx={skipStyle} />
          </IconButton>
          <IconButton
            size="small"
            sx={{ color: "text.primary" }}
            onClick={async () => togglePlay()}
          >
            {playing ? (
              <Pause sx={{ width: 38, height: 38 }} />
            ) : (
              <PlayArrow sx={{ width: 38, height: 38 }} />
            )}
          </IconButton>
          <IconButton size="small" sx={{ color: "text.primary" }}>
            <SkipNext sx={skipStyle} />
          </IconButton>
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          justifyContent={"center"}
          alignItems="center"
          sx={{ width: "75%" }}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: 12 }}
          >
            {formatTime(38)}
          </Typography>
          <Slider
            min={0}
            max={songDuration}
            sx={sliderStyle}
            size="medium"
            value={97}
          />
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: 12 }}
          >
            {formatTime(songDuration)}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

const mapState = (state) => {
  const { playing, duration, progress, device_id, loading } = state.player;
  return {
    playing,
    duration,
    progress,
    deviceId: device_id,
    loading,
  };
};

const mapDispatch = (dispatch) => {
  return {
    pause: () => dispatch(pause()),
    playNewSong: (api) => dispatch(playNewSong(api)),
    setProgress: (progress) => dispatch(setProgress(progress)),
  };
};

export default connect(mapState, mapDispatch)(PlayerControlls);
