import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putProfile } from "../data/fetch";
import { MyProfileContext } from "../context/MyProfileContext";
import { Loading } from "./Loading";
import { AlertCustom, initialAlertState } from "./AlertCustom";

function EditProfile({ showEditProfile, handleClose }) {
  const { myProfile, setToReRenderMyProfile } = useContext(MyProfileContext);
  const [inAlert, setInAlert] = useState(initialAlertState);
  const [isLoading, setIsLoading] = useState(false);
  const initialFormData = {
    area: myProfile.area,
    bio: myProfile.bio,
    email: myProfile.email,
    name: myProfile.name,
    surname: myProfile.surname,
    title: myProfile.title,
    company: myProfile.company,
    description: myProfile.description,
    role: myProfile.role,
  };
  const clearForm = () => {
    setFormData({
      area: "",
      bio: "",
      email: "",
      name: "",
      surname: "",
      title: "",
      company: "",
      description: "",
      role: "",
    });
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleOnChange = (event) => {
    event.preventDefault();
    const target = event.target;
    setFormData({ ...formData, [target.name]: target.value });
  };
  const handleSave = () => {
    setIsLoading(true);
    putProfile(formData)
      .then(() => {
        setInAlert({
          isAlert: true,
          heading: `Profilo modificata`,
          message: `Profilo modificata correttamente`,
          variant: "success",
        });
        setToReRenderMyProfile(true);
        setTimeout(() => {
          setInAlert(initialAlertState);
          if (showEditProfile) return handleClose();
        }, 3000);
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
  return (
    <Modal show={showEditProfile} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="mb-3">
            <Form.Label htmlFor="surname">Surname</Form.Label>
            <Form.Control
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              placeholder="Esempio: Scoppiato"
              onChange={(event) => handleOnChange(event)}
              required
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="name">Nome</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Esempio: Pelato"
              onChange={(event) => handleOnChange(event)}
              required
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Esempio: scoppiato@pelato.boom"
              onChange={(event) => handleOnChange(event)}
              required
            />
          </div>
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
            <Form.Label htmlFor="title">Titolo</Form.Label>
            <Form.Control
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={(event) => handleOnChange(event)}
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="bio">Biografia</Form.Label>
            <Form.Control
              as="textarea"
              id="bio"
              name="bio"
              rows="3"
              value={formData.bio}
              placeholder="Esempio: La mia prima esperienza in Micceria come attaccamicce"
              onChange={(event) => handleOnChange(event)}
              required
            ></Form.Control>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {isLoading && <Loading />}
        {inAlert.isAlert && <AlertCustom inAlert={inAlert} />}
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
        <Button variant="primary" className="rounded-pill" onClick={handleSave}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfile;
