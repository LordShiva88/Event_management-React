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

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
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
    currentUser
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
