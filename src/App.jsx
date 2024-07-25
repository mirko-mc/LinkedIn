import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import AsideCard from "./components/AsideCard";
import { ProfileContextProvider } from "./context/ProfileContext";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ProfileContextProvider>
        <header>
          <Container fluid>
            <Row>
              <Col>
                <h2>HEADER</h2>
              </Col>
            </Row>
          </Container>
        </header>
        <main>
          <Container>
            <Row>
              <Col lg={9}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="/*" element={<Navigate to="/404" />} />
                </Routes>
              </Col>
              <Col lg={3}>
                <aside>
                  <AsideCard />
                </aside>
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </ProfileContextProvider>
    </BrowserRouter>
  );
}

export default App;
