import React from 'react'
import {Route, BrowserRouter, Link} from 'react-router-dom'
import Recette from '../recette/Recette'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';


export default ({id, titre, image, difficulte, temps})=>{
return(
    
    <Card >
    <CardContent className="cardApercuRecette">
        <img src={image} className='imgRecetteAccueil'/>
   
    
        <h2>{titre}</h2>
        <p>{difficulte}</p>   
    </CardContent>   
      
    </Card>

)
}
