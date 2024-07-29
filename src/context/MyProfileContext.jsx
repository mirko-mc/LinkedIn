import { createContext, useEffect, useState } from "react";
import { ilTuoProfilo } from "../data/fetch";

export const MyProfileContext = createContext(null);

export const MyProfileContextProvider = ({ children }) => {
  const [myProfile, setMyProfile] = useState({});
  const [toReRenderMyProfile, setToReRenderMyProfile] = useState(true);
  useEffect(() => {
    toReRenderMyProfile &&
      ilTuoProfilo()
        .then((data) => setMyProfile(data))
        .catch((err) => alert(err.message));
    setToReRenderMyProfile(false);
  }, [toReRenderMyProfile]);
  const value = {
    myProfile,
    setMyProfile,
    toReRenderMyProfile,
    setToReRenderMyProfile,
  };
  return (
    <MyProfileContext.Provider value={value}>
      {children}
    </MyProfileContext.Provider>
  );
};
