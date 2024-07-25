import { Col, Container, Row } from "react-bootstrap";
import Select from "./Select";
import "./Footer.css";
import { IcoClose, IcoIngranaggio, IcoScudo } from "../assets/svg/IcoSvg";

function Footer() {
  return (
    <>
      <Container fluid>
        <Row className="bg-dark">
          <Col sm={12} md={6}>
            <div className="d-flex">
              <ul className="rimuoviPunti text-white mt-5 p-4 ">
                <li>
                  <a></a>informazioni
                </li>
                <li>
                  <a href="#"></a>Informativa sulla community professionale
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="bg-dark text-white border-0 btn-dark dropdown-toggle p-0 "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Privacy e condizioni
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Informativa sulla privacy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Contratto di licenza
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Informativa sui cookie
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#"></a>Sales Solutions
                </li>
                <li>
                  <a href="#"></a>Centro sicurezza
                </li>
                <li>
                  <a href="#"></a>LinkedIn Corporation © 2024
                </li>
              </ul>

              <ul className=" rimuoviPunti text-white mt-5 p-4 ">
                <li>
                  <a href="#"></a>Accessibilità
                </li>
                <li>
                  <a href="#"></a>Carriera
                </li>
                <li>
                  <a href="#"></a>opzioni per gli annunci pubblicitati
                </li>
                <li>
                  <a href="#"></a>Mobile
                </li>
              </ul>

              <ul className="rimuoviPunti text-white mt-5 p-4 ">
                <li>
                  <a href="#"></a>Talent Solutions
                </li>
                <li>
                  <a href="#"></a>Soluzioi di Marketing
                </li>
                <li>
                  <a href="#"></a>Pubblicità
                </li>
                <li>
                  <a href="#"></a>Piccole Imprese
                </li>
              </ul>
            </div>
          </Col>
          <Col className="align-self-center text-white" sm={12} md={3}>
            <div>
              <div className="d-flex">
                <IcoClose />
                <div>
                  <li>
                    <a>Domande?</a>
                  </li>
                  <li>Visita il nostro Centro Assistenza</li>
                </div>
              </div>
              <div className="d-flex">
                <IcoIngranaggio />
                <div>
                  <li>
                    <a>Gestisci il tuo account e la tua privacy</a>
                  </li>
                  <li>Vai alle impostazioni</li>
                </div>
              </div>
              <div className="d-flex">
                <IcoScudo />
                <div>
                  <li>
                    <a>Trasparenza sui contenuti consigliati</a>
                  </li>
                  <li>Scopri di più sui contenuti cosigliati</li>
                </div>
              </div>
            </div>
          </Col>

          <Col md={3} className="mt-5 ps-0 pe-5">
            <Select />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Footer;
