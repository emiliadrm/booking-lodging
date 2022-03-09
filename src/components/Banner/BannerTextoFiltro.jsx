import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

export default function BannerTextoFiltro() {
  const { priceCost, roomSize, locateCountry, arrivalDate, departureDate } = useContext(AppContext);
  
  const showPrices = (price) => {
    if (price === "LUJ") {
      return `En un espacio increiblemente comodo`;
    }
    if (price === "MOD") {
      return `En un tamaño muy comodo`;
    }
    if (price === "ECO") {
      return `En un tamaño considerable`;
    }
    return `A cualquier precio`;
  };

  const showRoomsSizes = (rooms) => {
    if (rooms === "GRA") {
      return `Con muchas opciones de habitaciones`;
    }
    if (rooms === "MED") {
      return `Con varias opciones de habitaciones`;
    }
    if (rooms === "PEQ") {
      return `Con algunas opciones de habitaciones`;
    }
    return `Con muchas habitaciones`;
  };

  const showCountries = (pais) => {
    if (pais !== "todos") {
      return `En ${pais}`;
    }
    return `En cualquier lugar`;
  };

  const showDateFrom = (dateFrom) => {
    const fechaHoy = new Date(dateFrom);
    const monthDate = fechaHoy.getMonth();
    const dayDate = fechaHoy.getDate();
    const yearDate = fechaHoy.getFullYear();

    return `${dayString[dayDate]}, ${dayDate} de ${monthString[monthDate]} de ${yearDate}`
  }
  
  const showDateTo = (dateTo) =>{ 
    const fechaTemporal = new Date(dateTo)
    const monthDate = fechaTemporal.getMonth();
    const dayDate = fechaTemporal.getDate();
    const yearDate = fechaTemporal.getFullYear();

    return `${dayString[dayDate]}, ${dayDate} de ${monthString[monthDate]} de ${yearDate}`
  }

  return (
    <>
      <div className="selectTextContainer">
        <p>Desde el {showDateFrom(arrivalDate)} hasta {showDateTo(departureDate)}</p>
        <p>{showCountries(locateCountry)}</p>
        <p>{showPrices(priceCost)}</p>
        <p>{showRoomsSizes(roomSize)}</p>
      </div>
    </>
  );
}

const monthString = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

const dayString = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
];