import UserProvider from "./UserContext"
import React from "react"
const AppContext = ({children}) => {   
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}
export default AppContext