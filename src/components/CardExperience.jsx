import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteExperience } from "../data/fetch";
import EditExperience from "./EditExperience";
import { useContext, useState } from "react";
import { AddProPic } from "./AddProPic";
import { IcoDelete, IcoEdit, IcoFollow } from "../assets/svg/IcoSvg";
import { MyProfileContext } from "../context/MyProfileContext";
import { UpdateExperienceContext } from "../context/UpdateExperienceContext";
import { AlertCustom, initialAlertState } from "./AlertCustom";
import { Loading } from "./Loading";

function CardExperience({ exp }) {
  const { setToReRenderExperience } = useContext(UpdateExperienceContext);
  const [showEditExperience, setShowEditExperience] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inAlert, setInAlert] = useState(initialAlertState);
  const [showAddProPic, setShowAddProPic] = useState(false);
  const { myProfile } = useContext(MyProfileContext);
  const handleDeleteExperience = () => {
    setIsLoading(true);
    deleteExperience(exp.user, exp._id)
      .then(() => setToReRenderExperience(true))
      .catch((err) =>
        setInAlert({
          isAlert: true,
          heading: `Error ${err.message}`,
          message: "Loading Error. Try Later",
          variant: "danger",
        })
      )
      .finally(() => setIsLoading(false));
  };
  return (
    <Card>
      <Row>
        <Col lg={2}>
          {myProfile?._id === exp.user && exp.image && (
            <Card.Img
              variant="top"
              src={exp.image}
              onClick={() => setShowAddProPic(true)}
            />
          )}
          {myProfile?._id === exp.user && !exp.image && (
            <Button variant="tertiary" onClick={() => setShowAddProPic(true)}>
              <IcoFollow />
            </Button>
          )}
          {myProfile?._id !== exp.user && (
            <Card.Img variant="top" src={exp.image} />
          )}
          {showAddProPic && (
            <AddProPic
              showAddProPic={showAddProPic}
              exp={exp}
              handleClose={() => setShowAddProPic(false)}
            />
          )}
        </Col>
        <Col lg={10}>
          <Card.Body>
            {isLoading && <Loading />}
            {inAlert.isAlert && <AlertCustom inAlert={inAlert} />}
            <div className="d-flex justify-content-between">
              <div>
                <Card.Title>{exp.company}</Card.Title>
                <ListGroup horizontal>
                  <li className="list-group-item p-0 border-0">{exp.role}</li>
                  <li className="list-group-item p-0 border-0 central-dot">
                    4 anni 7 mesi
                  </li>
                </ListGroup>
              </div>
              {myProfile?._id === exp.user && (
                <div>
                  <Button variant="tertiary" onClick={handleDeleteExperience}>
                    <IcoDelete />
                  </Button>
                  <Button
                    variant="tertiary"
                    onClick={() => setShowEditExperience(true)}
                  >
                    <IcoEdit />
                  </Button>
                </div>
              )}
            </div>
            {showEditExperience && (
              <EditExperience
                showEditExperience={showEditExperience}
                exp={exp}
                handleClose={() => setShowEditExperience(false)}
              />
            )}
            <ListGroup>
              <li>{exp.role}</li>
              <ListGroup horizontal>
                <li className="list-group-item p-0 border-0">
                  {exp.startDate}
                </li>
                <li className="list-group-item p-0 border-0 central-dot">
                  {exp.endDate === null ? "presente" : exp.endDate}
                </li>
                <li className="list-group-item p-0 border-0 central-dot">
                  4 anni 7 mesi
                </li>
              </ListGroup>
              <p>{exp.area}</p>
            </ListGroup>
            {exp.description && <Card.Text>{exp.description}</Card.Text>}
            <Link to="#">react.js, gitub</Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default CardExperience;
