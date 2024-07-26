import { useContext, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./GeneralInfo.css";
import { MyProfileContext } from "../context/MyProfileContext";
function GeneralInfo() {
  const { myProfile, setMyProfile } = useContext(MyProfileContext);
  setMyProfile("6551e7bbc55e7e0018f83bfb");
  return (
    <Card>
      <Card.Header className="position-relative">
        <Card.Img
          variant="top"
          id="proPic"
          src={myProfile.image}
          height={"150px"}
          className="rounded-circle w-auto position-absolute start-5 border border-3"
        />
        <Card.Img variant="top" src={myProfile.image} height={"150px"} />
      </Card.Header>
      <Card.Body>
        <Row>
          <Col lg={8}>
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item p-0 border-0">
                <Card.Title>{`${myProfile.name} ${myProfile.surname}`}</Card.Title>
              </li>
              <li className="list-group-item p-0 border-0 central-dot">1°</li>
            </ul>
            <Card.Text>{myProfile.title}</Card.Text>
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item p-0 border-0">{myProfile.area}</li>
              <li className="list-group-item p-0 border-0 central-dot">
                <Link to="#">Informazioni di contatto</Link>
              </li>
            </ul>
            <ListGroup horizontal>
              <ListGroupItem className="p-0 border-0"></ListGroupItem>
              <ListGroupItem className="p-0 border-0 centralDot">
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
                {myProfile.name} {myProfile.surname}, {myProfile.name}{" "}
                {myProfile.surname} e altri 2 collegamenti in comune
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
              <Card.Text>{myProfile.title}</Card.Text>
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
