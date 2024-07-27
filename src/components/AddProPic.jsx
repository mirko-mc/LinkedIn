import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postProfilePicture } from "../data/fetch";
import { useState } from "react";

export const AddProPic = ({ id, showAddProPic, handleClose }) => {
    const [fD, setFD] = useState(new FormData())
    const handleSave = (e) => {
        e.preventDefault();
        postProfilePicture(id, fD)
            .catch((error) => console.log(error))
            .finally(handleClose());
    };
    const handleFile = (e) => {
        setFD((prev) => {
        //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
          prev.delete("post") //ricordatevi di svuotare il FormData prima :)
          prev.append("post", e.target.files[0]) //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
          return prev
        })
      }
    return (
        <Modal show={showAddProPic} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Aggiungi foto profilo</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSave}>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Scegli la foto</Form.Label>
                        <Form.Control type="file" onChange={handleFile}/>
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
}
