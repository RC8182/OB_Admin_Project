import React, { createContext , useState } from "react";

const UserContext = createContext();
const initialUser = {name : 'Javier' , email : 'javiervisconti@hotmail.com'};

const UserProvider = ({children}) =>{
    
    const [user, setUser] = useState(initialUser);
    

    const login = () => {
        setUser(initialUser);
    }
    const logout = () => {
        setUser(null);
    }
    const data = {user, login, logout}
    
    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>

    )
}
export { UserProvider };
export default UserContext;