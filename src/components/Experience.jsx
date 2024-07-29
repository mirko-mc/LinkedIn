import { useContext, useEffect, useState } from "react";
import { listaEsperienze } from "../data/fetch";
import CardExperience from "./CardExperience";
import { Button, Col, Row } from "react-bootstrap";
import NewExperience from "./NewExperience";
import { IcoFollow } from "../assets/svg/IcoSvg";
import { MyProfileContext } from "../context/MyProfileContext";
import { Loading } from "./Loading";
import { AlertCustom, initialAlertState } from "./AlertCustom";
import { UpdateExperienceContext } from "../context/UpdateExperienceContext";

function Experience({ id }) {
  const { myProfile } = useContext(MyProfileContext);
  const { toReRenderExperience, setToReRenderExperience } = useContext(
    UpdateExperienceContext
  );
  const [experienceList, setExperienceList] = useState([]);
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inAlert, setInAlert] = useState(initialAlertState);

  useEffect(() => {
    if (toReRenderExperience) {
      setIsLoading(true);
      id &&
        listaEsperienze(id)
          .then((data) => {
            setExperienceList(data);
            return setToReRenderExperience(false);
          })
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
    }
  }, [id, toReRenderExperience]);
  if (experienceList.length === 0)
    return (
      <Row>
        <Col lg={12} className="d-flex justify-content-between">
          {isLoading && <Loading />}
          {inAlert.isAlert && <AlertCustom inAlert={inAlert} />}
          <h2>Esperienza</h2>
          {myProfile?._id === id && (
            <Button
              variant="tertiary"
              onClick={() => setShowAddExperience(true)}
            >
              <IcoFollow />
            </Button>
          )}
          {showAddExperience && (
            <NewExperience
              show={showAddExperience}
              id={id}
              handleClose={() => setShowAddExperience(false)}
            />
          )}
        </Col>
        <Col lg={12}>
          <p>Non ci sono esperienze</p>
        </Col>
      </Row>
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
      {inAlert.isAlert && <AlertCustom inAlert={inAlert} />}
      {experienceList.map((exp) => (
        <CardExperience key={exp._id} exp={exp} />
      ))}
    </Row>
  );
}
export default Experience;
