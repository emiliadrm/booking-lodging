import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

export default function FilterDate(){
  const { arrivalDate, setArrivalDate, departureDate, setDepartureDate } = useContext(AppContext);

  const saveDepartureDate = (e) => {
    const departureDate = e.target.value;
    setDepartureDate(departureDate);
  };

  const saveArrivalDate = (e) => {
    const arrivalDate = e.target.value;
    setArrivalDate(arrivalDate);
  };

  // ME MUESTRA LAS FECHAS DEL INPUT
  console.log('FECHAS SALIDA', departureDate);
  console.log('FECHAS LLEGADA', arrivalDate);

  return (
    <>
      <div className="flexStyleComponent">
        <label htmlFor="arrivalDateSelection">Llegada</label>
        <input id="arrivalDateSelection" className="StyleInput" type="date" value={departureDate} onChange={saveDepartureDate}/>
      </div>
      <div className="flexStyleComponent">
        <label htmlFor="departureDateSelection">Salida</label>
        <input id="departureDateSelection" className="StyleInput" type="date" value={arrivalDate} onChange={saveArrivalDate}/>
      </div>
    </>
  )
}