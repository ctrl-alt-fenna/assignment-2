import { createContext, useContext, useState } from "react";

import React from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}
const UserProvider = ({children}) => {
    const [ user, setUser] = useState(null )
    const state = {
        user,
        setUser
    }
    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider
