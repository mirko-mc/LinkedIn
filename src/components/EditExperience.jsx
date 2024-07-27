import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getExperience, putExperience } from "../data/fetch";

function EditExperience({ exp, showEditExperience, handleClose }) {
  // getExperience(exp.user, exp._id).then((data) => console.log(data));
  console.log(exp);
  const startDate = new Date(exp.startDate);
  const endDate = new Date(exp.endDate);
  const formattedStartDate = startDate.toISOString().split("T")[0];
  const formattedEndDate = endDate.toISOString().split("T")[0];

  const initialFormData = {
    area: exp.area,
    company: exp.company,
    description: exp.description,
    endDate: formattedEndDate,
    image: exp.image,
    role: exp.role,
    startDate: formattedStartDate,
  };
  const clearForm = () => {
    setFormData({
      area: "",
      company: "",
      description: "",
      endDate: "",
      image: "",
      role: "",
      startDate: "",
    });
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleOnChange = (event) => {
    event.preventDefault();
    const target = event.target;
    setFormData({ ...formData, [target.name]: target.value });
  };
  const handleEdit = () => {
    putExperience(exp.user, exp._id, formData)
      .catch((error) => console.log(error))
      .finally(handleClose());
  };
  return (
    <Modal show={showEditExperience} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="mb-3">
            <Form.Label htmlFor="area">Città</Form.Label>
            <Form.Control
              type="text"
              id="area"
              name="area"
              value={formData.area}
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
              value={formData.company}
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
              value={formData.role}
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
              value={formData.description}
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
              value={formData.image}
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
              value={formData.startDate}
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
              value={formData.endDate}
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
        <Button variant="danger" className="rounded-pill" onClick={clearForm}>
          Svuota campi
        </Button>
        <Button variant="primary" className="rounded-pill" onClick={handleEdit}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditExperience;
