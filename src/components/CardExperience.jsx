import { Card, Col, DropdownDivider, ListGroup, ListGroupItem, Row } from "react-bootstrap";

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
                  {/* se il termine dell'esperienza è null
                  allora scrivi "presente"
                  altrimenti scrivi il termine dell'esperienza */}
                  {exp.endDate === null ? "presente" : exp.endDate}
                </ListGroupItem>
                <ListGroupItem>4 anni 7 mesi</ListGroupItem>
              </ListGroup>
              <p>{exp.area}</p>
            </ListGroup>
            {exp.description && <Card.Text>{exp.description}</Card.Text>}
            <a href="#">react.js, gitub</a>
          </Card.Body>
          <DropdownDivider/>
        </Col>
      </Row>
    </Card>
  );
}
export default CardExperience;
