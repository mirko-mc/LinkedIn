import { Col, Container, Row, Dropdown } from "react-bootstrap";
import Select from "./Select";
import "./Footer.css";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
                <div>
                  <li>
                    <a>Domande?</a>
                  </li>
                  <li>Visita il nostro Centro Assistenza</li>
                </div>
              </div>
              <div className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-gear-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>

                <div>
                  <li>
                    <a>Gestisci il tuo account e la tua privacy</a>
                  </li>
                  <li>Vai alle impostazioni</li>
                </div>
              </div>
              <div className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-shield-shaded"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"
                  />
                </svg>
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
