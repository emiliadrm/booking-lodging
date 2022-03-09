import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppProvider";

export default function FilterDate(){
  const { arrivalDate, setArrivalDate, departureDate, setDepartureDate } = useContext(AppContext);
  const [dateError, setDateError] = useState(false);
  const todayDate = new Date().valueOf();
  const arrivalDateUnix = arrivalDate === '' ? null : new Date(arrivalDate).valueOf();
  const departureDateUnix = departureDate === '' ? null :new Date(departureDate).valueOf();

  const saveDepartureDate = (e) => {
    const departureDate = e.target.value;
    setDepartureDate(departureDate);

    if(todayDate > departureDateUnix){
      setDateError(true);
    } else {setDateError(false);}
  };

  const saveArrivalDate = (e) => {
    const arrivalDate = e.target.value;
    setArrivalDate(arrivalDate);

    if(todayDate > arrivalDateUnix){
      setDateError(true);
    } else {setDateError(false);}
  };

  return (
    <>
      <div className="flexStyleComponent">
        <label htmlFor="departureDateSelection" >Llegada</label>
        <input id="arrivalDateSelection" className="StyleInput" type="date" value={arrivalDate} onChange={saveArrivalDate}/>
      </div>
      <div className="flexStyleComponent">
        <label htmlFor="arrivalDateSelection">Salida</label>
        <input id="departureDateSelection" className="StyleInput" type="date" value={departureDate} onChange={saveDepartureDate}/>
      </div>
      {dateError === true ? (<><span className="errorDate">No puede ingresar una fecha menor al día de hoy</span></>) : null}
    </>
  )
}