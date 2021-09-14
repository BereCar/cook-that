import React, { useEffect, useState, useContext } from 'react'
import { auth } from '../firebase'

export default ()=>{

    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    return(
        <>
        <form>
      <div>
        <label for="email">Email :</label>
        <input
          value={email}
          onChangeText={setEmail}
        
        />
      </div>
      <div>
        <label for="passsword">Mot de passe :</label>
        <input
          value={password}
          onChangeText={setPassword}
        />
      </div>
      <button>Connection</button>
      </form>
      <a href='/inscription'>
      <button>Créer un compte</button>
      </a>
      </>
        
     
    )
}