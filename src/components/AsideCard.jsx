import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./AsideCard.css";
import { IcoSearch } from "../assets/svg/IcoSvg";

function AsideCard() {
  return (
    <>
      <div className="d-flex">
        <Card.Img
          className="img"
          variant="top"
          src="https://png.pngtree.com/png-clipart/20211008/ourmid/pngtree-question-mark-icon-png-image_3975287.png"
        ></Card.Img>

        <Card.Body>
          <Card.Title>Marcello Ascani</Card.Title>
          <p className="item">CEO 6 Co-founder di flatmates</p>
          <Button variant="light">
            <IcoSearch />
            Segui
          </Button>
        </Card.Body>
      </div>
    </>
  );
}
export default AsideCard;