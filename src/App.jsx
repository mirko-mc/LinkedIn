import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { cercaProfilo } from './data/fetch';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <header>
        <Container fluid>
          <Row>
            <Col className='border'>
              <h2>HEADER</h2>
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <Container>
          <Row>
            <Col lg={9} className='border'>
              <h1>Sono il PROFILE</h1>
              <button onClick={() => cercaProfilo()} className='btn btn-primary'>Testa la fetch</button>
            </Col>
            <Col lg={3} className='border'>
              <h2>ASIDE</h2>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <Container fluid>
          <Row>
            <Col className='border'>
              <h2>FOOTER</h2>
            </Col>
          </Row>
        </Container>
      </footer>
    </BrowserRouter>
  );
}

export default App;
