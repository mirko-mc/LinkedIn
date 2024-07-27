import { useEffect, useState } from "react";
import { listaEsperienze } from "../data/fetch";
import CardExperience from "./CardExperience";
import { Button } from "react-bootstrap";
import NewExperience from "./NewExperience";

function Experience({ id }) {
  const [experienceList, setExperienceList] = useState([]);

  const [show, setShow] = useState(false);

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
        <Button onClick={() => setShow(true)}>Aggiungi esperienza</Button>
        {show && (
          <NewExperience
            show={show}
            id={id}
            handleClose={() => setShow(false)}
          />
        )}
        <p>Non ci sono esperienze</p>
      </>
    );

  return (
    <>
      <h2>Esperienza</h2>
      <Button onClick={() => setShow(true)}>Aggiungi esperienza</Button>
      {show && (
        <NewExperience show={show} id={id} handleClose={() => setShow(false)} />
      )}
      {experienceList.map((exp) => (
        <CardExperience key={exp._id} exp={exp} show={show} setShow={setShow} />
      ))}
    </>
  );
}
export default Experience;
