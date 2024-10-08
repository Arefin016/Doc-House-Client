import { createContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth"
import { app } from "../firebase/firebase.config"

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setloading] = useState(true)
  const googleProvider = new GoogleAuthProvider()

  //create user
  const createuser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //user login or signin
  const signIn = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //google signin
  const googleSignIn = () => {
    setloading(true)
    return signInWithPopup(auth, googleProvider)
  }

  //signout or logout
  const logOut = () => {
    setloading(true)
    return signOut(auth)
  }

  //update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  //current user watching and following who is in the website or who is out of the website
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log("current user", currentUser)
      setloading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createuser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
