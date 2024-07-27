import { Col, Container, Row } from "react-bootstrap";
import Experience from "../components/Experience";
import GeneralInfo from "../components/GeneralInfo";
import Aside from "../components/Aside";
import "./Profile.css";
import { useParams } from "react-router-dom";
import { MyProfileContext } from "../context/MyProfileContext";
import { useContext, useEffect, useState } from "react";

function Profile() {
  const { myProfile } = useContext(MyProfileContext);
  const { id } = useParams();
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    id ? setUserId(id) : setUserId(myProfile?._id);
  }, [myProfile, id]);
  return (
    <Container>
      <Row>
        <Col lg={9}>
          <GeneralInfo id={userId} />
          <Experience id={userId} />
        </Col>
        <Col lg={3}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
export default Profile;
