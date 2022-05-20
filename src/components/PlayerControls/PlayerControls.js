import React from 'react'
import { formatTime } from '../../utils/Functions'
import PlayArrowIcon from '@mui/icons-material/PlayCircleFilledRounded';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import {IconButton, Grid, Stack, Typography, Slider} from '@mui/material'

const PlayerControls = ({sliderStyle}) => {
    const songDuration = 195
    return (
        <Grid
          item
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: { xs: 'flex-end', md: 'center' },
            alignItems: 'center',
          }}
        >
          <Stack
            spacing={0}
            direction='column'
            justify='center'
            alignItems='center'
            sx={{ width: '100%' }}
          >
            <Stack
              spacing={1}
              direction='row'
              justifyContent='center'
              alignItems='center'
              sx={{ width: '100%' }}
            >
              <IconButton size='small' sx={{ color: 'white' }}>
                <SkipPreviousIcon sx={{ width: 28, height: 28 }} />
              </IconButton>
              <IconButton size='small' sx={{ color: 'white' }}>
                <PlayArrowIcon sx={{ width: 38, height: 38 }} />
              </IconButton>
              <IconButton size='small' sx={{ color: 'white' }}>
                <SkipNextIcon sx={{ width: 28, height: 28 }} />
              </IconButton>
            </Stack>
            <Stack
              spacing={2}
              justifyContent='center'
              direction='row'
              alignItems='center'
              sx={{ width: '75%' }}
            >
              <Typography
                variant='body1'
                sx={{ color: 'text.secondary', fontSize: 12 }}
              >
                {formatTime(30)}
              </Typography>
              <Slider
                min={0}
                max={songDuration}
                sx={sliderStyle}
                size='medium'
                value={30}
                aria-label='Default'
              />
              <Typography
                variant='body1'
                sx={{ color: 'text.secondary', fontSize: 12 }}
              >
                {formatTime(songDuration)}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      );
    }

export default PlayerControls