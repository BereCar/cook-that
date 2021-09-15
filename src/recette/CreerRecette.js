import React, {useState, useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';

import UploadImage from './UploadImage';
import { useParams } from 'react-router-dom';
import { db } from '../firebase'
import { Button, Fab, TextField,Icon,IconButton,Tooltip , Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    divider: {
        margin: theme.spacing(2,0,0,0),
      },
    fab: {
      margin: theme.spacing(2,0,2,0),
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1),
      },
  }));

export default()=>{

    const [titre, setTitre]= useState('')
    const [errorTitre, setErrorTitre] = React.useState(false);
    const [errorDescrib, setErrorDescrib] = React.useState(false);
    const [describ, setDescrib] = useState('')
    const [pictureRecette, setPictureRecette] = useState('')
    


    const classes = useStyles();

    return (
        <div>
            <h2>Création d'une nouvelle recette</h2>
    <TextField required id="standard-required" label="Titre" value={titre} defaultValue={titre} error={errorTitre}
    onChange={(e)=>{setTitre(e.target.value); }}  placeholder="Titre de la recette"
    />
     <TextField
          id="filled-textarea"  label="Description" minRows={3}  value={describ} error={errorDescrib}
          placeholder="Décrire la recette" multiline variant="filled"
          onChange={(e)=>{setDescrib(e.target.value); }}
        />
   <Divider className={classes.divider}/>
   
    <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add" aria-label="add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Divider className={classes.divider}/>
      <UploadImage/>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
      >
        Valider
      </Button>
    </div>
    );

};