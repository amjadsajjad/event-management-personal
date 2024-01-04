import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [searchCategory, setSearchCategory] = useState('')
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [successfullMessage, setSuccessfullMessage] = useState('');

    // for solving the problem of redirecting login page when refreshing the page from the protected route:
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    const logOut = () => {
        return signOut(auth);
    }
    
    const googleLogin = (googleProvider) => {
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log('user is observed by onAuthStateChanged',currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    },[])

    // const handleToast = () => {
    //     toast('Your Account Logout Successfully')
    // }


    const Info ={setSearchCategory, searchCategory, user,createUser, signInUser, logOut,errorMessage,successfullMessage,setErrorMessage,setSuccessfullMessage, loading, googleLogin}
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;