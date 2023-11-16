import React from 'react'
import {Typography, Box, IconButton} from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

type TitleProps = {
    title: string;
};

type ListItemProps = {
    listItemLength: number;
}

const Header = ({title, listItemLength}: TitleProps & ListItemProps) => {
  return (
        <header>
            <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <Typography sx={{fontSize: {xs:'1.5rem', sm:'2rem', md: '3rem', lg: '3rem'}}} variant='h3' color={'primary.main'}>
                    {title}
                </Typography>
                
                    <IconButton disableRipple>
                        {listItemLength}
                        <PlaylistAddCheckIcon style={{fontSize: 35}}/>
                    </IconButton>
               
            </Box>
        </header>
  )
}

export default Header