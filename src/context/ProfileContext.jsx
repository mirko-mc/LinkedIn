import { createContext, useEffect, useState } from "react";
import { ilTuoProfilo } from "../data/fetch";

export const ProfileContext = createContext(null);

export const ProfileContextProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    ilTuoProfilo()
      .then((data) => setProfile(data))
      .catch((err) => alert(err.message));
  }, []);
  const value = { profile, setProfile };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
