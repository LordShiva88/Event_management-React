import { createContext } from "react";

export const UserAuthContext = createContext() 
const AuthContext = ({children}) => {
  const name = 'Liton'
  const authInfo = {
    name
  }
  return (
    <UserAuthContext.Provider value={authInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthContext;