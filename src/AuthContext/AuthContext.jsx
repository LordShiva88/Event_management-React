import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./Firebase.config";

export const UserAuthContext = createContext();
const AuthContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, gitHubProvider);
  };

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false)
    });
    return ()=>{
      unSubscribe()
    }
  }, []);

  console.log(currentUser)

  const authInfo = {
    googleLogin,
    gitHubLogin,
    createUser,
    logIn,
    logOut,
    currentUser,
    loading
  };

  return (
    <UserAuthContext.Provider value={authInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node,
};
export default AuthContext;
