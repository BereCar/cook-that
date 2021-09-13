import React from 'react'

export default()=>{
    let { recetteId } = useParams();
    return(
        <div>
           <h1>La recette choisie: {recetteId}</h1>
        </div>
         
       
    )
}