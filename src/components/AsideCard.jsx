import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./AsideCard.css";
import { IcoFollow } from "../assets/svg/IcoSvg";
import { MyProfileContext } from "../context/MyProfileContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function AsideCard({ profilo }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex">
        <Card.Img className="img" variant="top" src={profilo.image}></Card.Img>
        <Card.Body>
          <Card.Title
            as={Link}
            to={`/profile/${profilo._id}`}
          >{`${profilo.name} ${profilo.surname}`}</Card.Title>
          <div className="item">
            <p>{profilo.title}</p>
            <p>{profilo.bio}</p>
          </div>
          <Button variant="light">
            <IcoFollow />
            Segui
          </Button>
        </Card.Body>
      </div>
    </>
  );
}
export default AsideCard;
