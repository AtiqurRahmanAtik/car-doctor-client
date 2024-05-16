import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { set } from "firebase/database";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [ user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    // register 
    const register = (email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    //login 
    const login = (email,password)=>{
        setUser(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout 
    const logOut = () =>{
        setloading(true)
       return signOut(auth)
        
    }


    //observe 
    useEffect(()=>{
       const unserscribe = onAuthStateChanged(auth, currentUser=>{
       const UserEmail = currentUser?.email || user?.email;
         const loggedUser = {Email : UserEmail};

             setUser(currentUser);
            setloading(false);


           
            //if user exist esu a token
            if(currentUser){
               

                axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials:true})
                .then(res =>{
                    console.log(res.data);
                })
                .catch(error =>{
                    console.log(error);
                })
                 }

                 else{

                    axios.post('http://localhost:5000/logout', loggedUser,{
                        withCredentials: true
                    })
                    .then(res =>{
                        console.log(res.data);
                    })
                  
                }

        });
        
        return ()=>{
            return unserscribe();
        }

    },[])


    const AuthInfo = {
        user,
        loading,
        register,
        login,
        logOut

    }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;