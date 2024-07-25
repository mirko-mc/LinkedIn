import { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  DropdownDivider,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { cercaProfilo, ilTuoProfilo } from "../data/fetch";
import { Link } from "react-router-dom";
import "./GeneralInfo.css";
import { ProfileContext } from "../context/ProfileContext";

function GeneralInfo() {
  const { profile, setProfile } = useContext(ProfileContext);
  useEffect(() => {
    ilTuoProfilo().then((data) => setProfile(data)).catch(err => alert(err.message));
    console.log(profile);
  }, []);
  return (
    <Card>
      <Card.Header className="position-relative">
        <Card.Img
          variant="top"
          id="proPic"
          src={profile.image}
          height={"150px"}
          className="rounded-circle w-auto position-absolute start-5 border border-3"
        />
        <Card.Img variant="top" src={profile.image} height={"150px"} />
      </Card.Header>
      <Card.Body>
        <Row>
          <Col lg={8}>
            <Card.Title>{`${profile.name} ${profile.surname}`}</Card.Title>
            <Card.Text>{profile.title}</Card.Text>
            <ListGroup horizontal>
              <ListGroupItem className="border-0">{profile.area}</ListGroupItem>
              <ListGroupItem className="border-0">
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
