import React from 'react'
import {Box, Grid, Typography, Avatar} from '@mui/material'
import PlayerControls from '../PlayerControls/PlayerControls'
import VolumeControls from '../VolumeControls/VolumeControls'

const Player = () => {

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

  return (
    <Box>
        <Grid container px={3} sx={{bgcolor: 'Background.paper', height: 100, width: '100%', borderTop: '1px solid #292929' }}>
            <Grid item xs={3} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                <Avatar src="/Justin-Bieber.png" alt="Bieber" variant="square" sx={{width: 56, height: 56, marginRight: 2}} />
                <Box>
                    <Typography sx={{color: 'text.primary', fontSize: 14}}>Holy</Typography>
                    <Typography sx={{color: 'text.secondary', fontSize: 12}}>Justin Bieber</Typography>
                </Box>
            </Grid>
            <PlayerControls sliderStyle={sliderStyle} />
            <VolumeControls sliderStyle={sliderStyle} />
        </Grid>
    </Box>
  )
}

export default Player