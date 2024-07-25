import { useContext, useEffect, useState } from "react";
import { listaEsperienze } from "../data/fetch";
import CardExperience from "./CardExperience";
import { ProfileContext } from "../context/ProfileContext";

function Experience() {
  const { profile, setProfile } = useContext(ProfileContext);
  const [experienceList, setExperienceList] = useState([]);
  useEffect(() => {
    listaEsperienze(profile._id).then((data) => setExperienceList(data));
    listaEsperienze("6551e7bbc55e7e0018f83bfb").then((data) => setExperienceList(data));
  }, []);
  console.log(experienceList.length);
  if (experienceList.length === 0)
    return (
      <>
        <h2>Esperienza</h2>
        <p>Non ci sono esperienze</p>
      </>
    );

  return (
    <>
      <h2>Esperienza</h2>
      {experienceList.map((exp) => (
        <CardExperience key={exp._id} exp={exp} />
      ))}
    </>
  );
}
export default Experience;
