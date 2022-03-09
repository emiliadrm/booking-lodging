import React from "react";
// import iconDate from "../../resources/Icon-date-range.svg";

export default function DateCard({ dateTo, dateFrom }) {
  // Deberia haber una funcion que muestre la disponibilidad que tiene el lugar seleccionado
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

  const showStringDate = (dateTo) =>{ 
    const fechaTemporal = new Date(dateTo)
    const monthDate = fechaTemporal.getMonth();
    const dayDate = fechaTemporal.getDate();
    const yearDate = fechaTemporal.getFullYear();

    return `${dayDate} ${monthString[monthDate]} ${yearDate}`
  }
   
  const showDateFrom = (dateFrom) => {
    const fechaHoy = new Date(dateFrom);
    const monthDate = fechaHoy.getMonth();
    const dayDate = fechaHoy.getDate();

    return `${dayDate} ${monthString[monthDate]}`
  }

  //console.log(dateFrom, 'FROM', dateTo, 'TO');
  //console.log(fechaPrueba.toISOString().split('T')[0], 'TEST');
  return (
      <h3 className="marginTextCardStyle">{showDateFrom(dateFrom)} - {showStringDate(dateTo)}</h3>
  );
}
