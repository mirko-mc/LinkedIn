import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./AsideCard.css";
import { IcoFollow, IcoOmino } from "../assets/svg/IcoSvg";

function AsideCard({ profilo, type }) {
  return (
    <>
      <div className="d-flex borAside">
        <Card.Img className="img" variant="top" src={profilo.image}></Card.Img>

        <Card.Body>
          <Card.Title><h6 className="mb-0">{`${profilo.name} ${profilo.surname}`}</h6></Card.Title>
          <div className="item">
            <p className="m-0">{profilo.title}</p>
            <p className="mb-1">{profilo.bio}</p>
          </div>
          {type==="segui" ? <Button className="mb-4 buttonAside" variant="light">
            <IcoFollow />
            Segui
          </Button> : <Button className="mb-4 buttonAside" variant="light">
            <IcoOmino />
            collegati
          </Button>}
          
        </Card.Body>
      </div>
    </>
  );
}
export default AsideCard;
