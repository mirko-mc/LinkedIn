import { Nav, Navbar, NavDropdown, Form, Container } from "react-bootstrap";
import { IcoHome, IcoLavoro, IcoLinkedin, IcoMessaggistica, IcoNotifiche, IcoRete, IcoSearch } from "../assets/svg/IcoSvg";

function MyNavBar() {
  return (
    <Navbar expand="lg">
      <Container  fluid>
        <Navbar.Brand href="#">
          <IcoLinkedin />
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 icoMobile"
            aria-label="Search"
          />
        </Form>
        <IcoSearch />
        <Nav.Link className="text-center marginIco">
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
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;