import { useEffect, useState } from "react";
import { listaEsperienze } from "../data/fetch";
import CardExperience from "./CardExperience";
import { Button } from "react-bootstrap";
import NewExperience from "./NewExperience";

function Experience({ id }) {
  const [experienceList, setExperienceList] = useState([]);

  const [showAddExperience, setShowAddExperience] = useState(false);

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
        <Button onClick={() => setShowAddExperience(true)}>
          Aggiungi esperienza
        </Button>
        {showAddExperience && (
          <NewExperience
            show={showAddExperience}
            id={id}
            handleClose={() => setShowAddExperience(false)}
          />
        )}
        <p>Non ci sono esperienze</p>
      </>
    );

  return (
    <>
      <h2>Esperienza</h2>
      <Button onClick={() => setShowAddExperience(true)}>
        Aggiungi esperienza
      </Button>
      {showAddExperience && (
        <NewExperience
          showAddExperience={showAddExperience}
          id={id}
          handleClose={() => setShowAddExperience(false)}
        />
      )}
      {experienceList.map((exp) => (
        <CardExperience key={exp._id} exp={exp} />
      ))}
    </>
  );
}
export default Experience;
