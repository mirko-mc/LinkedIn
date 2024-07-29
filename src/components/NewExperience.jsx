import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { creaEsperienza } from "../data/fetch";
import { UpdateExperienceContext } from "../context/UpdateExperienceContext";

function NewExperience({ showAddExperience, id, handleClose }) {
  const { setToReRenderExperience } = useContext(UpdateExperienceContext);
  const initialFormData = {
    area: "",
    company: "",
    description: "",
    endDate: "",
    image: "",
    role: "",
    startDate: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSave = () => {
    creaEsperienza(id, formData)
      .then(() => setToReRenderExperience(true))
      .catch((error) => console.log(error))
      .finally(handleClose());
  };
  return (
    <Modal show={showAddExperience} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Aggiugni nuova esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSave}>
          <div className="mb-3">
            <Form.Label htmlFor="area">Città</Form.Label>
            <Form.Control
              type="text"
              id="area"
              name="area"
              placeholder="Esempio: Napoli"
              onChange={(event) => handleOnChange(event)}
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="company">Azienda</Form.Label>
            <Form.Control
              type="text"
              id="company"
              name="company"
              placeholder="Esempio: Micceria"
              onChange={(event) => handleOnChange(event)}
              required
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="role">Ruolo</Form.Label>
            <Form.Control
              type="text"
              id="role"
              name="role"
              placeholder="Esempio: Attaccamicce"
              onChange={(event) => handleOnChange(event)}
              required
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="description">Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              id="description"
              name="description"
              rows="3"
              placeholder="Esempio: La mia prima esperienza in Micceria come attaccamicce"
              onChange={(event) => handleOnChange(event)}
              required
            ></Form.Control>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="image">Immagine</Form.Label>
            <Form.Control
              type="text"
              id="image"
              name="image"
              placeholder="Esempio: https://media.gettyimages.com/id/147879469/it/foto/bomb-with-burning-fuse.jpg?s=612x612&w=gi&k=20&c=OumX2qNC4N-djQBBaDiQZHjtSTbaRJ1AOHRLFmHmrfM="
              onChange={(event) => handleOnChange(event)}
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="startDate">Data di inizio</Form.Label>
            <Form.Control
              type="date"
              id="startDate"
              name="startDate"
              onChange={(event) => handleOnChange(event)}
              required
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="endDate">Data di fine</Form.Label>
            <Form.Control
              type="date"
              id="endDate"
              name="endDate"
              onChange={(event) => handleOnChange(event)}
            />
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="rounded-pill"
          onClick={handleClose}
        >
          Chiudi
        </Button>
        <Button variant="primary" className="rounded-pill" type="submit">
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewExperience;
