import { Button } from "react-bootstrap";
import { listaProfili } from "../data/fetch";

function Profile() {
  return (
    <>
      <h1>Sono il PROFILE</h1>
      <Button onClick={() => listaProfili()} className="btn btn-primary">
        Testa la fetch
      </Button>
    </>
  );
}
export default Profile;
