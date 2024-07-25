import { createContext, useState } from "react";

export const ProfileContext = createContext(null);

export const ProfileContextProvider = ({ children }) => {
    const [profile, setProfile] = useState({})
    const value = { profile, setProfile };
    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
};