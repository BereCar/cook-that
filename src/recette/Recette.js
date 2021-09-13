import React from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase'

export default()=>{
    let  {id}  = useParams();
    console.log( {id})
    let idRecette = id.toString();
    console.log(idRecette)
    var docRef = db.collection("recettes").doc(idRecette);
    
 const data = docRef.get().then((doc) => {
    if (doc.exists) {
        return (data=  doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
    return(
        <div>
           <h1>La recette choisie: {id}  </h1>
        </div>
         
       
    )
}