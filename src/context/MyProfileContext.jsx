import { createContext, useEffect, useState } from "react";
import { ilTuoProfilo } from "../data/fetch";

export const MyProfileContext = createContext(null);

export const MyProfileContextProvider = ({ children }) => {
  const [myProfile, setMyProfile] = useState({});
  useEffect(() => {
    ilTuoProfilo()
      .then((data) => setMyProfile(data))
      .catch((err) => alert(err.message));
  }, []);
  const value = { myProfile, setMyProfile };
  return (
    <MyProfileContext.Provider value={value}>
      {children}
    </MyProfileContext.Provider>
  );
};
