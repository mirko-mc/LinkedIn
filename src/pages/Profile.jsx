import { Button } from "react-bootstrap";
import { cercaProfilo } from "../data/fetch";

function Profile() {
  return (
    <>
      <h1>Sono il PROFILE</h1>
      <Button onClick={() => cercaProfilo()} className="btn btn-primary">
        Testa la fetch
      </Button>
    </>
  );
}
export default Profile;
