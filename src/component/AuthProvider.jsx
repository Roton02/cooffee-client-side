import { createContext } from "react";
import auth from "./Firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const Register = (email,password) => {
     return createUserWithEmailAndPassword(auth, email, password)  
  };
  const login =(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const data = {Register,login };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
