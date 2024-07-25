import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import MyNavBar from "./components/MyNavBar";
import Aside from "./components/Aside"

function App() {
  return (
    <BrowserRouter>
      <nav className="mb-5">
        <MyNavBar/>
      </nav>
      <main>
        <Container>
          <Row>
            <Col lg={9}>
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Routes>
              <Experience />
            </Col>
            <Col lg={3}>
              <aside>
                <Aside/>
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
