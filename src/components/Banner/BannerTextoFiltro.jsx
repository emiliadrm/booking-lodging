import React, { useContext } from "react";
import AppContext from "../../context/AppProvider";

export function ShowFilterSelection() {
  const { priceCost, roomSize, locateCountry } = useContext(AppContext);
  
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

  return (
    <>
      <div className="selectTextContainer">
        <p>Desde el martes, 1 de enero de 2019 hasta el miércoles, 2 de enero de 2019</p>
        <p>{showCountries(locateCountry)}</p>
        <p>{showPrices(priceCost)}</p>
        <p>{showRoomsSizes(roomSize)}</p>
      </div>
    </>
  );
}
