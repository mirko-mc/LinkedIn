import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteExperience } from "../data/fetch";
import EditExperience from "./EditExperience";
import { useState } from "react";

function CardExperience({ exp }) {
  const [showEditExperience, setShowEditExperience] = useState(false);
  return (
    <Card>
      <Row>
        <Col lg={2}>
          <Card.Img variant="top" src={exp.image} />
        </Col>
        <Col lg={10}>
          <Card.Body>
            <Card.Title>{exp.company}</Card.Title>
            <ListGroup horizontal>
              <li className="list-group-item p-0 border-0">{exp.role}</li>
              <li className="list-group-item p-0 border-0 central-dot">
                4 anni 7 mesi
              </li>
            </ListGroup>
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
          <Card.Footer>
            <Button
              variant="primary"
              onClick={() => deleteExperience(exp.user, exp._id)}
            >
              Elimina
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowEditExperience(true)}
            >
              {" "}
              Modifica
            </Button>
            {showEditExperience && (
              <EditExperience
                showEditExperience={showEditExperience}
                exp={exp}
                handleClose={() => setShowEditExperience(false)}
              />
            )}
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
}
export default CardExperience;
