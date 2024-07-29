import { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./GeneralInfo.css";
import { MyProfileContext } from "../context/MyProfileContext";
import { cercaProfilo } from "../data/fetch";
import EditProfile from "./EditProfile";
import { AddProPic } from "./AddProPic";
import { IcoEdit } from "../assets/svg/IcoSvg";
import { AlertCustom, initialAlertState } from "./AlertCustom";
import { Loading } from "./Loading";

function GeneralInfo({ id }) {
  const { myProfile, toReRenderMyProfile } =
    useContext(MyProfileContext);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showAddProPic, setShowAddProPic] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [inAlert, setInAlert] = useState(initialAlertState);

  useEffect(() => {
      setIsLoading(true);
      if (myProfile?._id && id)
        myProfile?._id === id
          ? setUser(myProfile)
          : cercaProfilo(id)
              .then((data) => {
                setUser(data);
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
  }, [id, myProfile, toReRenderMyProfile]);
  return (
    <Card>
      <Card.Header className="position-relative">
        {inAlert.isAlert && <AlertCustom inAlert={inAlert} />}
        {myProfile?._id === id ? (
          <Card.Img
            variant="top"
            id="proPic"
            src={user.image}
            height={"150px"}
            className="rounded-circle w-auto position-absolute start-5 border border-3"
            onClick={() => setShowAddProPic(true)}
          />
        ) : (
          <Card.Img
            variant="top"
            id="proPic"
            src={user.image}
            height={"150px"}
            className="rounded-circle w-auto position-absolute start-5 border border-3"
          />
        )}
        {showAddProPic && (
          <AddProPic
            id={id}
            showAddProPic={showAddProPic}
            handleClose={() => setShowAddProPic(false)}
          />
        )}
        <Card.Img variant="top" src={user.image} height={"150px"} />
      </Card.Header>
      <Card.Body>
        <Row>
          <Col className="d-flex justify-content-end">
            {isLoading && <Loading />}
            {myProfile?._id === id && (
              <Button variant="light" onClick={() => setShowEditProfile(true)}>
                <IcoEdit />
              </Button>
            )}
            {showEditProfile && (
              <EditProfile
                showEditProfile={showEditProfile}
                handleClose={() => setShowEditProfile(false)}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item p-0 border-0">
                <Card.Title>{`${user.name} ${user.surname}`}</Card.Title>
              </li>
              <li className="list-group-item p-0 border-0 central-dot">1°</li>
            </ul>
            <Card.Text>{user.title}</Card.Text>
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item p-0 border-0">{user.area}</li>
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
                {user.name} {user.surname}, {user.name} {user.surname} e altri 2
                collegamenti in comune
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
              <Card.Text>{user.title}</Card.Text>
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
