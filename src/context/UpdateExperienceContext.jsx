import { createContext, useState } from "react";

export const UpdateExperienceContext = createContext(null);

export const UpdateExperienceContextProvider = ({ children }) => {
  const [toReRenderExperience, setToReRenderExperience] = useState(true);
  const value = { toReRenderExperience, setToReRenderExperience };
  return (
    <UpdateExperienceContext.Provider value={value}>
      {children}
    </UpdateExperienceContext.Provider>
  );
};
