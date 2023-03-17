import { useState } from "react"
import React from "react"

const AuthContext=React.createContext({
    token: '',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}

})

export const AuthContextProvider=(props)=>{
    const[token,setToken]=useState(null)
    const userIsLoggedin=!!token
    const loginhandler=(token)=>{
        setToken(token)
    }
    const logouthandler=()=>{
    setToken(null)
}
const contextvalue={
    token :token,
    isLoggedIn:userIsLoggedin,
    login:loginhandler,
    logout:logouthandler
}
    return <AuthContext.Provider value={contextvalue}>{props.children}</AuthContext.Provider>
}
export default AuthContext