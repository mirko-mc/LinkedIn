import { useContext, useEffect, useState } from "react";
import { listaEsperienze } from "../data/fetch";
import CardExperience from "./CardExperience";
import { Button, Col, Row } from "react-bootstrap";
import NewExperience from "./NewExperience";
import { IcoFollow } from "../assets/svg/IcoSvg";
import { MyProfileContext } from "../context/MyProfileContext";
import { Loading } from "./Loading";
import { AlertCustom } from "./AlertCustom";

function Experience({ id }) {
  const { myProfile } = useContext(MyProfileContext);
  const [experienceList, setExperienceList] = useState([]);
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inAlert, setInAlert] = useState(false);
  const initialAlertState = {
    isAlert: false,
    heading: "",
    message: "",
    variant: "",
  };

  useEffect(() => {
    setIsLoading(true);
    id &&
      listaEsperienze(id)
        .then((data) => setExperienceList(data))
        .catch((e) => {
          setInAlert({
            isAlert: true,
            heading: `Error ${e.message}`,
            message: "Loading Error. Try Later",
            variant: "danger",
          });
          setTimeout(() => setInAlert(initialAlertState), 5000);
        });
    setIsLoading(false);
  }, [id]);
  if (experienceList.length === 0)
    return (
      <>
        {isLoading && <Loading />}
        {inAlert.isAlert && (
          <AlertCustom
            variant={inAlert.variant}
            heading={inAlert.heading}
            message={inAlert.message}
          />
        )}
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
      {isLoading && <Loading />}
      {inAlert.isAlert && (
        <AlertCustom
          variant={inAlert.variant}
          heading={inAlert.heading}
          message={inAlert.message}
        />
      )}
      {experienceList.map((exp) => (
        <CardExperience key={exp._id} exp={exp} />
      ))}
    </Row>
  );
}
export default Experience;
