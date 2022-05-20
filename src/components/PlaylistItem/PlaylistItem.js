import React from 'react'
import { ListItem, ListItemButton, ListItemAvatar, Avatar, Box,   Skeleton } from "@mui/material";
import { useNavigate } from 'react-router-dom'

const PlaylistItem = ({name, playListId, image, loading})  =>  {
const navigate = useNavigate()

if (loading)
  return (
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemAvatar sx={{marginRight: '15px'}}>
                <Skeleton variant='rectangular' width={60} height={60} />
            </ListItemAvatar>
            <Skeleton variant="text" animation="wave" width={150} height={20} />
        </ListItemButton>
    </ListItem>
  )
  
  return (
      <Box 
      onClick={() => {navigate(`/playlist/${playListId}`)}}
      sx={{
          display: 'flex',
          color: 'text.secondary',
          alignItems: 'center'
        }}
        py={1}
        >
        <Avatar
        alt="Remy Sharp"
        src={image}
        variant="square"
        sx={{height: 60, width: 60, marginRight: '15px'}}
        />
        {name}
        </Box>
        )
    }
        
export default PlaylistItem