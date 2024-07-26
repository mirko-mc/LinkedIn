import {
  Card,
  Col,
  DropdownDivider,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function CardExperience({ exp }) {
  return (
    <Card>
      <Row>
        <Col lg={2}>
          <Card.Img
            variant="top"
            src="https://png.pngtree.com/png-clipart/20211008/ourmid/pngtree-question-mark-icon-png-image_3975287.png"
          />
        </Col>
        <Col lg={10}>
          <Card.Body>
            <Card.Title>{exp.company}</Card.Title>
            <ListGroup horizontal>
              <ListGroupItem>{exp.role}</ListGroupItem>
              <ListGroupItem>4 anni 7 mesi</ListGroupItem>
            </ListGroup>
            <ListGroup>
              <ListGroupItem>{exp.role}</ListGroupItem>
              <ListGroup horizontal>
                <ListGroupItem>{exp.startDate}</ListGroupItem>
                <ListGroupItem>
                  {exp.endDate === null ? "presente" : exp.endDate}
                </ListGroupItem>
                <ListGroupItem>4 anni 7 mesi</ListGroupItem>
              </ListGroup>
              <p>{exp.area}</p>
            </ListGroup>
            {exp.description && <Card.Text>{exp.description}</Card.Text>}
            <Link to="#">react.js, gitub</Link>
          </Card.Body>
          <DropdownDivider />
        </Col>
      </Row>
    </Card>
  );
}
export default CardExperience;
