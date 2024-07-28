import { useContext, useEffect, useState } from "react";
import { listaEsperienze } from "../data/fetch";
import CardExperience from "./CardExperience";
import { Button, Col, Row } from "react-bootstrap";
import NewExperience from "./NewExperience";
import { IcoEdit, IcoFollow } from "../assets/svg/IcoSvg";
import { MyProfileContext } from "../context/MyProfileContext";

function Experience({ id }) {
  const { myProfile } = useContext(MyProfileContext);
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
    <Row>
      <Col lg={12} className="d-flex justify-content-between">
        <h2>Esperienza</h2>
        {myProfile?._id === id && (
          <Button variant="tertiary" onClick={() => setShowAddExperience(true)}>
            <IcoFollow />
          </Button>
        )}
        {showAddExperience && (
          <NewExperience
            showAddExperience={showAddExperience}
            id={id}
            handleClose={() => setShowAddExperience(false)}
          />
        )}
      </Col>
      {experienceList.map((exp) => (
        <CardExperience key={exp._id} exp={exp} />
      ))}
    </Row>
  );
}
export default Experience;
