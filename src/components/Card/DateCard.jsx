import React from "react";
import iconDate from "../../resources/Icon-date-range.svg";

export default function DateCard() {
    // Deberia haber una funcion que muestre la disponibilidad que tiene el lugar seleccionado
    return (
      <div className="componentTextCardStyle">
        <img src={iconDate} alt="" />
        <h3 className="marginTextCardStyle">02 Abril - 24 Abril, 2021</h3>
      </div>
    );
  }
  