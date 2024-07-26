import { createContext, useState } from "react";

export const UserProfileContext = createContext(null);

export const UserProfileContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({});
  const value = { userProfile, setUserProfile };
  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};
