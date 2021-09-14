import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase'

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
       
           console.log(typeof recette.ingredients)          
        } else {
           
            alert("No such document!");
        }
    }).catch((error) => {
        alert("Error getting document:", error);
    })
       
    }, [])

   const afficherIngredients = ()=>{
       
    return Object.entries(recette.ingredients).map(([nom, quantity]) =>    
    console.log([nom, quantity])
  //  <span>`${nom}: ${quantity}`</span>
    )
    
   }

//    const afficherIngredients = () => {
//        return Object.keys(recette.ingredients).map((item, index) => {
//            return <span key= {index}> recette.ingredients[item]</span>
//        })
//    }

    return(
        <div>
           <h1>La recette choisie: {recette.titre}  </h1>
        <h3>Description</h3>
        <p>{recette.description}</p>
        <h3>Ingrédients</h3>
       <span> {afficherIngredients}</span>

        </div>
         
       
    )
}