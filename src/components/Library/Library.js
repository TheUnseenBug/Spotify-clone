import React from 'react'
import { Typography, Box, List} from '@mui/material'
import PlaylistItem from '../PlaylistItem/PlaylistItem'

const Library = ({playlists, loading}) => {
  const renderPlaylistItems = () => {
    if (loading){
    return [1, 2, 3, 4, 5, 6].map((e, i) => (<PlaylistItem key={i} loading={true} />))}

    return playlists.map((playlist, i) => (<PlaylistItem {...playlist} key={i}/>))
  }

  return (
    <Box
    id='Library'
    px={3}
    sx={{display: {xs: 'flex', md: 'none'},
  bgcolor: 'background.default',
  flex: 1,
  flexDirection: 'column',
  overflowY: 'auto'
  }}
    >
<Typography variant="h2" fontWeight={'bold'}
sx={{color: 'text.primary'}}>
  Ditt bibliotek
</Typography>
      <List>{renderPlaylistItems()}</List>
    </Box>
  )
}

export default Library