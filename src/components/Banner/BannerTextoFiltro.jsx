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

  const showDates = (dateFrom, dateTo) => {
    if( dateFrom !== '' & dateTo !== '') {
      // Fecha DESDE
      const fechaFrom = new Date(dateFrom);
      const monthDate = fechaFrom.getMonth();
      const dayDate = fechaFrom.getDate();
      const dayStringFrom = fechaFrom.getDay();
      const yearDate = fechaFrom.getFullYear();
      // fecha HASTA
      const fechaTo = new Date(dateTo)
      const monthDateTo = fechaTo.getMonth();
      const dayDateTo = fechaTo.getDate();
      const dayStringTo = fechaTo.getDay();
      const yearDateTo = fechaTo.getFullYear();

      return `Desde el ${dayString[dayStringFrom]}, ${dayDate} de ${monthString[monthDate]} de ${yearDate} hasta ${dayString[dayStringTo]}, ${dayDateTo} de ${monthString[monthDateTo]} de ${yearDateTo}`
    }
    return `En cualquier momento`
  }
  
  return (
    <>
      <div className="selectTextContainer">
        <p>{showDates(arrivalDate, departureDate)}</p>
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