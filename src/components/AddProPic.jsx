import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postPicture } from "../data/fetch";
import { useContext, useState } from "react";
import { AlertCustom, initialAlertState } from "./AlertCustom";
import { Loading } from "./Loading";
import { UpdateExperienceContext } from "../context/UpdateExperienceContext";
import { MyProfileContext } from "../context/MyProfileContext";

export const AddProPic = ({ id, showAddProPic, handleClose, exp }) => {
  const { setToReRenderMyProfile } = useContext(MyProfileContext);
  const { setToReRenderExperience } = useContext(UpdateExperienceContext);
  const [isLoading, setIsLoading] = useState(false);
  const [inAlert, setInAlert] = useState(initialAlertState);
  // fD sta per formData e sarà lo stato da dare in pasto alla fetch per uploadare l'immagine
  const [fD, setFD] = useState(new FormData());
  const handleSave = (e) => {
    setIsLoading(true);
    e.preventDefault();
    // :userId/experiences/:expId
    postPicture(!exp ? id : `${exp.user}/experiences/${exp._id}`, fD)
      .then(() => {
        setInAlert({
          isAlert: true,
          heading: `Immagine caricata`,
          message: `Foto ${
            !exp ? "profilo" : "esperienza"
          } caricata correttamente`,
          variant: "success",
        });
        setTimeout(() => {
          setInAlert(initialAlertState);
          return showAddProPic && handleClose();
        }, 3000);
        console.log(!exp);
        !exp ? setToReRenderMyProfile(true) : setToReRenderExperience(true);
      })
      .catch((err) => {
        setInAlert({
          isAlert: true,
          heading: `Error ${err.message}`,
          message: "Loading Error. Try Later",
          variant: "danger",
        });
        setTimeout(() => setInAlert(initialAlertState), 5000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleFile = (e) => {
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
          {isLoading && <Loading />}
          {inAlert.isAlert && <AlertCustom inAlert={inAlert} />}
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
