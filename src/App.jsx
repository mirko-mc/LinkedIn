import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import AsideCard from "./components/AsideCard";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Container fluid>
          <Row>
            <Col className="border">
              <h2>HEADER</h2>
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <Container>
          <Row>
            <Col lg={9} className="border">
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Routes>
              <Experience />
            </Col>
            <Col lg={3} className="border">
              <aside>
                <AsideCard />
              </aside>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
