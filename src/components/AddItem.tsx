import React from 'react'
import {TextField, IconButton} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';


type NewItemProps = {
    newItem: string;
};

type AddItemProps = {
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void;
}; 

type SetterFunctionProps = {
    setNewItem: React.Dispatch<React.SetStateAction<string>>;
};

const AddItem = ({newItem, setNewItem, handleSubmit}: NewItemProps & SetterFunctionProps & AddItemProps) => {
  return (
    <form onSubmit={handleSubmit}>
       <TextField
        label='Add Task'
        type='text'
        id='addItem'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        sx={{width: '80%'}}
        />
        
         <IconButton type='submit' title='addTask'>
            <AddCircleIcon sx={{fontSize:{xs: 40, sm: 50}}} color='primary'/>
         </IconButton>
    </form>
  )
}

export default AddItem