import { useEffect, useState } from "react";
import { listaEsperienze } from "../data/fetch";
import CardExperience from "./CardExperience";

function Experience() {
  const [experienceList, setExperienceList] = useState([]);
  useEffect(() => {
    // rendere dinamico la ricezione dell'id per fare la fetch
    listaEsperienze("6551e7bbc55e7e0018f83bfb").then((data) =>
      setExperienceList(data)
    );
  }, []);
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
