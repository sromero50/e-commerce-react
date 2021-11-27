import AuthContext from "./authContext";
import React, {useState} from 'react'

function AuthProvider(props){
    const [login, setLogin] = useState(localStorage.getItem("login"))
    const [signup, setSignup] = useState(false)
    const [info, setInfo] = useState(JSON.parse(localStorage.getItem("info")))


    const loginUser = (info)=> {
        setInfo(info)
        localStorage.setItem("login", true)
        localStorage.setItem("info", JSON.stringify(info))
        setLogin(true)
       

    }   
    const signupUser = ()=> {
        setSignup(true)
    }

    const logoutUser = ()=> {
        setLogin(false)
        setInfo({})
        localStorage.removeItem("login")
        localStorage.removeItem("info")
    
    }
return <AuthContext.Provider value={{
            login,
            signup,
            info,
            loginUser,
            logoutUser,
            signupUser
        }} >
            {props.children}
        </AuthContext.Provider>
    
}

export default AuthProvider
