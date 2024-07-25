import AsideCard from "./AsideCard";
import { useState, useEffect } from "react";
import { listaProfili } from "../data/fetch";

function Aside() {
    const [aside, setAside] = useState([]);
    useEffect(() => {

        listaProfili().then((dati) =>{
          return setAside(dati)
          
        }
        );
    }, []);
    const profileToRender = []
    for (let i = 0; i < 5; i++) {
        let randNum = Math.round(Math.random() * aside.length);
        profileToRender.push(aside[randNum]);
        console.log(profileToRender)
      }
    
    return (
        <>
            <h2>Cerca profilo</h2>
            {profileToRender.map((profilo) => (
                <AsideCard key={profilo._id} profilo={profilo}/>
            ))}
        </>
    );
}
export default Aside;