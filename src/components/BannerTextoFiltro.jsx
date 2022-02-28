import React from "react";

export function SelectText(props) {
  return (
    <>
      <div className="selectTextContainer">
        <p>Desde el martes, 1 de enero de 2019 hasta el miércoles, 2 de enero de 2019</p>
        <p>{props.mostrarPais(props.pais)}</p>
        <p>{props.mostrarPrice(props.price)}</p>
        <p>{props.mostrarHab(props.rooms)}</p>
      </div>
    </>
  );
}
