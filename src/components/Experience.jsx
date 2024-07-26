import { useContext, useEffect, useState } from "react";
import { listaEsperienze } from "../data/fetch";
import CardExperience from "./CardExperience";
import { MyProfileContext } from "../context/MyProfileContext";

function Experience({ id }) {
  const { myProfile, setMyProfile } = useContext(MyProfileContext);
  const [experienceList, setExperienceList] = useState([]);
  useEffect(() => {
    // listaEsperienze("65ae3ed3600be100183a8698")
    listaEsperienze(id)
      .then((data) => setExperienceList(data))
      .catch((error) => console.log(error));
  }, [id]);
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
