import AsideCard from "./AsideCard";
import { useState, useEffect } from "react";
import { listaProfili } from "../data/fetch";
function Aside() {
  const [profiles, setProfiles] = useState([]);

  const [profiliSimili, setProfiliSimili] = useState([]);
  const [profiliRete, setProfiliRete] = useState([])
  const [potrestiConoscere, setPotrestiConoscere] = useState([]);
  const handleProfileToRender = (n, data) => {
    const temp = [];
    for (let i = 0; i < n; i++) {
      const randNum = Math.round(Math.random() * data.length - 1);
      temp.push(data[randNum]);
    }
    return temp;
  };

  useEffect(() => {
    listaProfili().then((data) => {
      setProfiliSimili(handleProfileToRender(5, data));
      setProfiliRete(handleProfileToRender(2, data))
      setPotrestiConoscere(handleProfileToRender(5, data));
      setProfiles(data);
    });
  }, []);

  return (
    <>
      <h6>Cerca profilo</h6>
      {profiles.length &&
        profiliSimili.map((profilo) => (
          <AsideCard key={profilo._id} profilo={profilo} type="segui" />
        ))}
         <h6>Espandi la tua rete</h6>

      {profiles.length &&
        profiliRete.map((profilo) => (
          <AsideCard key={profilo._id} profilo={profilo} type="collegati"/>
        ))}
      <h6>Persone che potresti conoscere</h6>
      {profiles.length &&
        potrestiConoscere.map((profilo) => (
          <AsideCard key={profilo._id} profilo={profilo} type="" />
        ))}
    </>
  );
}
export default Aside;
