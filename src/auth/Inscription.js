import React, {useState, useEffect} from 'react'
import { FormControl, TextField , InputLabel, Input, Button, Icon} from '@material-ui/core';
import { auth } from '../firebase'

const SENDING_STEPS = {   
    NONE: 'NONE',  
    VALIDATION: 'VALIDATION',  
    SEND_DATA: 'SEND_DATA',
  }

export default()=>{
    const [mail, setMail] = useState({ value: '', error: '' })
    const[pwd, setPwd] = useState({ value: '', error: '' })
    const[confirm, setConfirm]= useState({ value: '', error: '' })
    
    return(
        <>      
         
      
        <FormControl>
         <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input-email" aria-describedby="my-helper-text"   value={mail? mail : ""} 
            onChange={(e)=>{
                setMail(e.target.value)
            }}
        />
         
        </FormControl>
        <FormControl>
         <InputLabel htmlFor="my-input">Mot de passe : </InputLabel>
         <TextField label="confirmation"  id="my-input-password" aria-describedby="my-helper-text" 
                 
                 variant='outlined' margin='normal' required
                 name='password' label='Password' type='password'
                 value={pwd? pwd : ""}
                 onChange={(e) => {
                   setPwd(e.target.value)
                  
                 }}                
                 autoComplete='current-password'
                 
                 />
        </FormControl>

        <FormControl>
         <InputLabel htmlFor="my-input">Confirmer votre mot de passe : </InputLabel>
        <TextField label="confirmation"  id="my-input-confirm" aria-describedby="my-helper-text" 
                 
                  variant='outlined' margin='normal' required
                  name='password' label='Password' type='password'
                  value={confirm? confirm : ""}
                  onChange={(e) => {
                    setConfirm(e.target.value)                   
                  }}                 
                  autoComplete='current-password'                  
                  />
         
        </FormControl>
        <Button variant="contained" color="primary" onSubmit={()=>{}} >Inscription</Button>
        </>
    )
}