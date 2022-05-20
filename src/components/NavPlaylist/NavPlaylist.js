import { Box } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'


export default function NavPlaylist({ name, id }) {
  return (
    <Link style={{textDecoration: 'none'}} to={`/playlist/${id}`}>
    <Box
      px={3}
      py={1}
      sx={{
        color: 'text.secondary',
        cursor: 'pointer',
        '&:hover': { color: 'white' },
        fontSize: 14,
      }}
    >
      {name}
    </Box>
    </Link>
  );
}