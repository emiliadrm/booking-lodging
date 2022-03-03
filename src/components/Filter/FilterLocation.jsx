import React, { useContext } from "react";
import AppContext from "../../context/AppProvider";

export default function FilterLocation(){
  const { locateCountry, setLocateCountry } = useContext(AppContext);

  const cambiarPais = (e) => {
    let locateCountry = e.target.value;
    setLocateCountry(locateCountry);
  };

  return(
    <>
      <div className="flexStyleComponent">
        <label htmlFor="countrySelection">Ubicación</label>
        <select id="countrySelection" className="StyleInput" value={locateCountry} onChange={cambiarPais}>
          <option value="todos">¿A dónde vas?</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>
      </div>
    </>
  )
}