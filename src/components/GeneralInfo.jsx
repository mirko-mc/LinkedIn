import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { cercaProfilo } from "../data/fetch";
import { Link } from "react-router-dom";

function GeneralInfo() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    cercaProfilo("6551e7bbc55e7e0018f83bfb").then((data) => setProfile(data));
    console.log(profile);
  }, []);
  return (
    <Card>
      <Card.Header>
        <Card.Img variant="top" src={profile.image} height={"150px"} />
      </Card.Header>
      <Card.Body>
        <Row>
          <Col lg={8}>
            <Card.Title>{`${profile.name} ${profile.surname}`}</Card.Title>
            <Card.Text>{profile.title}</Card.Text>
            <ListGroup horizontal>
              <ListGroupItem>{profile.area}</ListGroupItem>
              <ListGroupItem>
                <Link to="#">Informazioni di contatto</Link>
              </ListGroupItem>
            </ListGroup>
            <Card.Text>
              Più di {Math.round(Math.random() * 999)} collegamenti
            </Card.Text>
            <Row>
              <Card.Img
                src="https://png.pngtree.com/png-clipart/20211008/ourmid/pngtree-question-mark-icon-png-image_3975287.png"
                height={"50px"}
                className="rounded-circle w-auto"
              />
              <Card.Img
                src="https://png.pngtree.com/png-clipart/20211008/ourmid/pngtree-question-mark-icon-png-image_3975287.png"
                height={"50px"}
                className="rounded-circle w-auto"
              />
              <Card.Text>
                {profile.name} {profile.surname}, {profile.name}{" "}
                {profile.surname} e altri 2 collegamenti in comune
              </Card.Text>
            </Row>
          </Col>

          <Col lg={4}>
            <span>
              <Card.Img
                variant="top"
                src="https://png.pngtree.com/png-clipart/20211008/ourmid/pngtree-question-mark-icon-png-image_3975287.png"
                height={"50px"}
                className="w-auto"
              />
              <Card.Text>{profile.title}</Card.Text>
              <Card.Img
                variant="top"
                src="https://png.pngtree.com/png-clipart/20211008/ourmid/pngtree-question-mark-icon-png-image_3975287.png"
                height={"50px"}
                className="w-auto"
              />
            </span>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Messaggio</Button>
        <Button variant="tertiary">Altro</Button>
      </Card.Footer>
    </Card>
  );
}

export default GeneralInfo;
