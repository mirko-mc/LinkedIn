import { Col, Container, Row } from "react-bootstrap";
import Experience from "../components/Experience";
import GeneralInfo from "../components/GeneralInfo";
import Aside from "../components/Aside";

function Profile() {
  return (
    <Container>
      <Row>
        <Col lg={9}>
          <GeneralInfo />
          <Experience />
        </Col>
        <Col lg={3}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
export default Profile;
