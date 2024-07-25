import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./AsideCard.css";
import { IcoFollow } from "../assets/svg/IcoSvg";

function AsideCard({ profilo }) {
  return (
    <>
      <div className="d-flex">
        <Card.Img className="img" variant="top" src={profilo.image}></Card.Img>

        <Card.Body>
          <Card.Title>{`${profilo.name} ${profilo.surname}`}</Card.Title>
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
