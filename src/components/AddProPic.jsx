import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postPicture } from "../data/fetch";
import { useState } from "react";

export const AddProPic = ({ id, showAddProPic, handleClose, exp }) => {
  // fD sta per formData e sarà lo stato da dare in pasto alla fetch per uploadare l'immagine
  const [fD, setFD] = useState(new FormData());
  // console.log(exp.user);
  // console.log(exp._id);
  const handleSave = (e) => {
    e.preventDefault();
    // :userId/experiences/:expId
    postPicture(!exp ? id : `${exp.user}/experiences/${exp._id}`, fD)
      .catch((error) => console.log(error))
      .finally(handleClose());
  };
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setFD((prev) => {
      // ricordatevi di svuotare il FormData prima :)
      prev.delete(!exp ? "profile" : "experience");
      // per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
      prev.append(!exp ? "profile" : "experience", e.target.files[0]);
      /**
       * L'API richiede un "nome" diverso per ogni rotta:
       *    - per caricare un'immagine ad un profilo, nel form data andra' inserito un valore con nome "profile"
       *    - per caricare un'immagine ad un'esperienza, nel form data andra' inserito un valore con nome "experience"
       */
      return prev;
    });
  };
  return (
    <Modal show={showAddProPic} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Aggiungi foto {!exp ? "profilo" : "esperienza"}
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSave}>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Scegli la foto</Form.Label>
            <Form.Control type="file" onChange={handleFile} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="rounded-pill"
            onClick={handleClose}
          >
            Chiudi
          </Button>
          <Button type="submit" variant="primary" className="rounded-pill">
            Salva
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
