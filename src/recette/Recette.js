import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default()=>{
    const [recette, setRecette] = useState({})
    let  {id}  = useParams();
    let idRecette = id.toString();

    useEffect(() => {         
        var docRef = db.collection("recettes").doc(idRecette);
  
        docRef.get().then((doc) => {
            if (doc.exists) {
                
                setRecette (doc.data())
                console.log(doc.data())
        
            
            } else {
            
                alert("No such document!");
            }
        }).catch((error) => {
            alert("Error getting document:", error);
        })
       
    }, [])

//    const afficherIngredients = ()=>{
       
//     return Object.entries(recette.ingredients).map(([nom, quantity]) =>    
//     console.log([nom, quantity])
//   //  <span>`${nom}: ${quantity}`</span>
//     )
    
//    }
      
    const ingredients = Object.entries(recette.ingredients || {}).map(
        ( [key, value])=> {
            return <p key={`ingredient-${key}`}>{key} : {value}</p>
        }
     )
   

    return(
        <div>
       <span classname='arrowBack'> <a href='/'><ArrowBackIcon/></a></span>
        <h1>La recette choisie: {recette.titre}  </h1>
        <img src={recette.image}/>
        <span>{recette.temps} - {recette.difficulte}  - {recette.cout} - </span>
       
        <span>Pour {recette.portion}</span>
        <h3>Description</h3>
        <p>{recette.description}</p>
        <h3>Ingrédients</h3>
       <div> {ingredients}</div>
       <div>
           <h3>Préparation : </h3>
           <p>{recette.preparation}</p>
       </div>

        </div>
         
       
    )
}