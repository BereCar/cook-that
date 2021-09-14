import { OndemandVideoOutlined } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'

/**
 * Voici les différente de ce qui se produit lors d'une inscription
 */
const SENDING_STEPS = {
  /**
   * Correspond à l'état initial, pas d'enscription envoyéc
   */
  NONE: 'NONE',

  /**
   * On demande la validation des données
   */
  VALIDATION: 'VALIDATION',

  /**
   * On envoie les données à firebase
   */
  SEND_DATA: 'SEND_DATA',
}

export default () => {
  // STATE
  const [emailField, setEmailField] = useState({ value: '', error: '' })
  const [passwordField, setPasswordField] = useState({ value: '', error: '' })
  const [confirmPasswordField, setConfirmPasswordField] = useState({
    value: '',
    error: '',
  })
  const [formError, setFormError] = useState('')
  const [step, setStep] = useState(SENDING_STEPS.NONE)

  // EFFECT
  // Première effet, la validation des données
  useEffect(() => {
    // Cette effet se déclenche uniquement lors de la step "VALIDATION"
    if (step !== SENDING_STEPS.VALIDATION) return

    // Validation de l'email
    const validateEmail = () => {
      let valid = true

      if (!emailField.value) {
        setEmailField({
          value: emailField.value,
          error: 'Vous devez renseigner un email',
        })

        valid = false
      }

      if (!/^[^@]+@[^.]+\.[a-zA-Z0-9]+/.test(emailField.value)) {
        setEmailField ({
          value: emailField.value,
          error: 'Vous devez renseigner un email valide',
        })

        valid = false
      }

      return valid
    }

    // Validation des mots de passe
    const validatePasswords = () => {
      let valid = true

      if (!passwordField.value) {
        setPasswordField({
          value: passwordField.value,
          error: 'Vous devez renseigner un mot de passe',
        })

        valid = false
      }

      if (!confirmPasswordField.value) {
        setPasswordField({
          value: passwordField.value,
          error: 'Vous devez confirmer un mot de passe',
        })

        valid = false
      }

      if (passwordField.value !== confirmPasswordField.value) {
        setPasswordField({
          value: passwordField.value,
          error: 'mdm et confim ne sont pas le meme',
        })

        valid = false
      }

      return valid
    }

    // On vide l'erreur de formulaire
    setFormError('')

    // On Attend 1 seconde
    setTimeout(() => {
      // On valid l'email et le mot de passe
      let validEmail = validateEmail()
      let validPassword = validatePasswords()

      // Si c'est valid on passe à l'étape SEND_DATA
      if (validEmail && validPassword) {
        setStep(SENDING_STEPS.SEND_DATA)
      } else {
        // On retourne à l'étape NONE
        setStep(SENDING_STEPS.NONE)
      }
    }, 1000)
  }, [step])

  // Second effet, l'envoie des données à firebase
  useEffect(() => {
    // On éxécute l'effet uniquement si l'étape est SEND_DATA
    if (step !== SENDING_STEPS.SEND_DATA) return

    const sendToFirebase = async () => {
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(
          emailField.value,
          passwordField.value
        )

        console.warn(userCredential)

        setStep(SENDING_STEPS.NONE)
      } catch (e) {
        setFormError(e.message)

        setStep(SENDING_STEPS.NONE)
      }
    }

    setTimeout(() => {
      sendToFirebase()
    }, 1000)
  }, [step])

  // HELPERS
  // curried function
  // setField :: { value :: string, error :: string } -> Void
  // changeField :: setField -> React.Event -> Void
  const changeField = setField => ev =>
    setField({
      error: '',
      value: ev.target.value,
    })

  return (
    <div>
      <div>
        <p>Votre email :</p>
        {!!emailField.error && (
          <p>{emailField.error}</p>
        )}
        <input
          value={emailField.value}
          // onChangeText :: String -> Void
          onChange={changeField(setEmailField)}
        />
      </div>
      <div>
        <p>Votre mot de passe :</p>
        {!!passwordField.error && (
          <p>{passwordField.error}</p>
        )}
        <input
          value={passwordField.value}
          onChange={changeField(setPasswordField)}
        />
      </div>
      <div>
        <p>Confirmation du mot de passe :</p>
        {!!confirmPasswordField.error && (
          <p >{confirmPasswordField.error}</p>
        )}
        <input
          value={confirmPasswordField.value}
          onChange={changeField(setConfirmPasswordField)}
        />
      </div>
      {step === SENDING_STEPS.NONE ? (
      <div>
        {!!formError && <p>{formError}</p>}
        
        <button  
        onClick={() => {
        setStep(SENDING_STEPS.VALIDATION)
      }}>  S'inscrire </button>
      </div>
      ) : (
        <p>en train d'envoyer</p>
      )}
    </div>
    
  )
}