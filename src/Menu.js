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

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Inscription from './auth/Inscription'


const useStyles = makeStyles({
    root: {
      width: 500,
    },
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
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        <a href="/login">
        <BottomNavigationAction label="Login" value="login"  icon={<PersonIcon />} />
        </a>
      
      </BottomNavigation>
      </Router>
    );
  }