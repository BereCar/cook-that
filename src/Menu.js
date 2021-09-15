import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Logo from './pictures/logo.svg';

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';

import Inscription from './auth/Inscription'
import { StayPrimaryLandscapeOutlined } from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
     backgroundColor: '#E1F4CB',
     position:'fixed',
     bottom : 0,
     width: ' 100%',
    
    }
  });
  
  export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Router>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <a href="/">
        <BottomNavigationAction label="Accueil" value="accueil" icon={<HomeIcon />} />
        </a>
        <a href="">
        <BottomNavigationAction label="Ajout recette" value="ajoutRecette" icon={<AddIcon />} />
        </a>
        <BottomNavigationAction label="CookThat" value="cookThat" icon={<FastfoodIcon/>}/>
        <BottomNavigationAction label="Mes recettes" value="mesRecettes" icon={<FavoriteIcon />} />
        <a href="/login">
        <BottomNavigationAction label="Login" value="login"  icon={<PersonIcon />} />
        </a>
      
      </BottomNavigation>
      </Router>
    );
  }