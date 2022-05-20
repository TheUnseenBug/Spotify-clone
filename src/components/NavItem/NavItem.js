import { Box } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function NavItem({ name, Icon, active, target }) {
  const navigate = useNavigate()
  return (
    <Link style={{textDecoration: 'none'}} to={target}>
    <Box
    onClick={() => {navigate(target)}}
      px={3}
      py={1}
      sx={{
        color: active ? 'white' : 'text.secondary',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': { color: 'white' },
        transition: 'color 0.2s ease-in-out',
        fontSize: 14,
      }}
    >
      {Icon && <Icon sx={{ fontSize: 28, marginRight: 1 }} />}
      {name}
    </Box>
    </Link>
  );
}