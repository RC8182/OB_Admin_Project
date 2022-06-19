import React, { createContext , useState } from "react";

const UserContext = createContext();
const initialUser = {    
    id:1,
    name: 'Javier',
    surname: 'Visconti',
    email: 'open@bootcamp.com',
    password:'111111'};

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