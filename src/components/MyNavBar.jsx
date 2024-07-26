import { Nav, Navbar, Dropdown, Form, Container } from "react-bootstrap";
import { IcoHome, IcoLavoro, IcoLinkedin, IcoMessaggistica, IcoNotifiche, IcoRete, IcoSearch } from "../assets/svg/IcoSvg";

function MyNavBar() {
  return (
    <Navbar expand="lg">
      <Container>
      <div className="d-flex align-items-center">
        <Navbar.Brand href="#">
          <IcoLinkedin />
        </Navbar.Brand>
        <Form>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 icoMobile"
            aria-label="Search"
          />
        </Form>
        </div>
        <div className="d-flex">     
        <IcoSearch />
        <Nav.Link className="text-center marginIco hoverBlack">
        <IcoHome />
          <span className="icoMobile">Home</span>
        </Nav.Link>
        <Nav.Link className="text-center marginIco">
          <IcoRete />
          <span className="icoMobile">Rete</span>
        </Nav.Link>
        <Nav.Link className="text-center marginIco">
          <IcoLavoro />
          <span className="icoMobile">Lavoro</span>
        </Nav.Link>
        <Nav.Link className="text-center marginIco">
          <IcoMessaggistica />
          <span className="icoMobile">Messaggistica</span>
        </Nav.Link>
        <Nav.Link className="text-center marginIco">
          <IcoNotifiche />
          <span className="icoMobile">Notifiche</span>
        </Nav.Link>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Tu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;