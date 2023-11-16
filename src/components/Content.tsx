import React from 'react'
import {Box, Checkbox, List, ListItem, ListItemText, IconButton, Divider,Typography} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

// Type Props
type ListItemsprops = {
    items: {
        id: number;
        title: string;
        checked: boolean;
    }[];
};

type CheckItemProps = {
    handleCheck: (id:number) => void;
};

type DeleteItemProps = {
    handleDelete: (id:number) => void;
}

 

// Content Component
const Content = ({items, handleCheck, handleDelete}: ListItemsprops & CheckItemProps & DeleteItemProps) => {
  return (
    <main>
       {items.length ? (
         <Box sx={{width: '100%'}}>
            
           
         {items.map((item)=>(
             
             <List key={item.id}>
             <ListItem>
                  <Checkbox color='primary' sx={{'& .MuiSvgIcon-root': { fontSize: {sm: 40, md: 40} }} } id={`check_${item.id}`} checked={item.checked}
                  title='checkBox'
                  onChange={()=>handleCheck(item.id)}/>

                    <ListItemText
                    sx={{
                        textDecoration: (item.checked) ? 'line-through' : 'none',
                    }}
                    primary={item.title}
                    primaryTypographyProps={{
                        style: {
                            fontSize: '20px',
                        },
                    }}
                    />

             
                 <IconButton type='button' tabIndex={0} onClick={()=>handleDelete(item.id)} style={{color: 'rgb(249, 125, 125)'}}>
                     <DeleteIcon sx={{fontSize: {sm: 30, md:40}}}/>
                 </IconButton>
                 
             </ListItem>
             <Divider/>
             </List>
         ))}
        
         
     </Box>
       ) : (
        <Typography sx={{fontSize:{xs: '0,8rem',sm: '1rem',md:'2rem',lg:'2.5rem'}}} margin={'auto'}>
            No To-Do Items Found
        </Typography>
       )}
    </main>
  )
}

export default Content