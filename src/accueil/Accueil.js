
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import ApercuRecette from './ApercuRecette'
import { db } from '../firebase'
import Recette from '../recette/Recette';


export default () => {
    const [recettes, setRecettes] = useState([])
    let match = useRouteMatch();

    useEffect(() => {
      // Je céer une fonction asynchrone afin de récupérer
      // les recettes de firestore
      const fetchRecettes = async () => {
        
        const snapshot = await db.collection('recettes').get()
  
        const receivedRecettes= snapshot.docs.map(document => {
          
          return {
            ...document.data(),
            id: document.id,
          }
        })
  
        setRecettes(receivedRecettes)
      }
  
      fetchRecettes()
    }, [])
   
    return(
        
        <div >
            {recettes.map(recette =>(
                <>
                <ApercuRecette
                    key = {`recette-${recette.id}`}
                    id = {recette.id}
                    titre = {recette.titre}
                    image = {recette.image}
                    difficulte = {recette.difficulte}
                    temps = {recette.temps}
                    

                    
                />
                 <Link to={`/recettes/${recette.id}`}>Voir le détail</Link>
                 </>
                 
      ))}
    
        </div>
       
    )
}