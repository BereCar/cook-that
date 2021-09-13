import React from 'react'
import {Route, BrowserRouter, Link} from 'react-router-dom'
import Recette from '../recette/Recette'

export default ({id, titre, image, difficulte, temps})=>{
return(
    
    <div>
        <img src={image}/>
        <h2>{titre}</h2>
        <p>{difficulte}</p>      
      
    </div>

)
}
