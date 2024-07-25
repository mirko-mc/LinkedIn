import AsideCard from "./AsideCard";
import { useState, useEffect } from "react";
import { listaProfili } from "../data/fetch";
function Aside() {
  const [profiles, setProfiles] = useState([]);

  const [profileToRender, setProfileToRender] = useState([]);

  useEffect(() => {
    listaProfili().then((data) => {
      setProfiles(data);
      const temp = [];
      for (let i = 0; i < 5; i++) {
        const randNum = Math.round(Math.random() * data.length - 1);
        temp.push(data[randNum]);
      }
      setProfileToRender(temp);
    });
  }, []);

  return (
    <>
      <h2>Cerca profilo</h2>
      {profiles.length &&
        profileToRender.map((profilo) => (
          <AsideCard key={profilo._id} profilo={profilo} />
        ))}
    </>
  );
}
export default Aside;
