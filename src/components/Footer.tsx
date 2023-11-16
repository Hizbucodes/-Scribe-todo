import React from 'react'
import { Typography, Box } from '@mui/material';


const Footer = () => {
  const currentYear = new Date();
  return (
    <Box sx={{padding: '15px', bgcolor: 'aliceblue;', width: '100%', textAlign: 'center'}}>
        <Typography variant='h6' fontWeight={'bold'} color={'primary'}>
          Copyright &copy; {currentYear.getFullYear()}
        </Typography>
    </Box>
  )
}

export default Footer