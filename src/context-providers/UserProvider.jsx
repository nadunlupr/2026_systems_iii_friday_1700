import { createContext, useContext } from "react";

const UserContext = createContext();

export default function UserProvider({user, children}) {
    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const user = useContext(UserContext);
    if(!user) {
        throw new Error("User Not Found");
    }
    return user;
}