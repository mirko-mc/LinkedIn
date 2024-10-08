import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./AsideCard.css";
import { IcoFollow, IcoOmino } from "../assets/svg/IcoSvg";
import { Link } from "react-router-dom";

function AsideCard({ profilo, type }) {
  return (
    <>
      <div className="d-flex borAside">
        <Card.Img className="img" variant="top" src={profilo.image}></Card.Img>
        <Card.Body className="w-100">
          <Card.Title
            as={Link}
            to={`/profile/${profilo._id}`}
          >{`${profilo.name} ${profilo.surname}`}</Card.Title>
          <div className="item">
            <p className="m-0 text-truncate">{profilo.title}</p>
            <p className="mb-1 text-truncate">{profilo.bio}</p>
          </div>
          {type === "segui" ? (
            <Button className="mb-4 buttonAside" variant="light">
              <IcoFollow />
              Segui
            </Button>
          ) : (
            <Button className="mb-4 buttonAside" variant="light">
              <IcoOmino />
              collegati
            </Button>
          )}
        </Card.Body>
      </div>
    </>
  );
}
export default AsideCard;
