import React, { useEffect, useState, useContext} from 'react'
import { Button } from '@material-ui/core'
import { auth } from '../firebase'
import { Redirect } from 'react-router'
import IsConnectedContext from '../IsConnectedContext'


export default ()=>{

    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [sending, setSending] = useState(false)
   const [errorMessage, setErrorMessage] = useState('')
   const [successMessage, setSuccessMessage] = useState('')
  // const [isConnected, setIsConnected] = useContext(IsConnectedContext)


   useEffect(() => {
    if (sending === false) return

    // On vide le message de success
    setSuccessMessage('')
    // On vide le message d'erreur
    setErrorMessage('')

    const authenticate = async () => {
      try {
        const userCredential = await auth.signInWithEmailAndPassword(
          email,
          password
        )

        setSuccessMessage(`Bienvenue ${userCredential.user.email} :)`)

        // setTimeout(() => {
        //   setIsConnected(true)
        // }, 1000)
      } catch (e) {
        setErrorMessage(e.message)
      }

      setSending(false)
    }   

    authenticate()
  }, [sending])

 // if (isConnected) return <Redirect to='/' />

    return(
        <div className="login">
        <form>
      <div>
        <label for="email" className="labelForm">Email :</label>
        <input
          value={email}
          onChange= {(e) => {
                    setEmail(e.target.value)
                   
                  }
          }
          className="inputForm"
        
        />
      </div>
      <div>
        <label for="password" className="labelForm">Mot de passe :</label>
        <input
          value={password}
          onChange={(e) => {
                    setPassword(e.target.value)
                   
                  }
          }
          className="inputForm"
        />
      </div>
      <div>
        {!!successMessage &&(
          <p>{successMessage}</p>
        )}
        {!!errorMessage &&(
          <p>{errorMessage}</p>
        )}
        {sending ?(
          <p>connection en cours...</p>
        ) : 
        <p></p>}
      </div>

      <Button variant="contained" color="primary" size="large" paddingTop={2} className="btnLogin"  onClick={()=>{setSending(true)}} >Connection</Button>

      </form>

      <a href='/inscription'>
      <Button variant="outlined" color="primary" size="large" className="btnLogin" paddingTop={2}
      >Créer un compte</Button>
      </a>

      </div>
        
     
    )
}