import React, { useContext } from "react";
import { hotelsData } from "./data";
import { AppContext }  from "./context/AppProvider";
import "./styles.css";

import Header from "./components/Banner/Header";
import Filter from "./components/Filter/Filter";
import Card from "./components/Card/Card";
import NotResult from "./NotResult";


export default function App() {
  const { roomSize, priceCost, locateCountry, departureDate, arrivalDate} = useContext(AppContext);
  const arrivalDateUnix = arrivalDate === '' ? null : new Date(arrivalDate).valueOf();
  const departureDateUnix = departureDate === '' ? null :new Date(departureDate).valueOf();

 // FUNCION QUE filtra por opciones
  const crearLista = () => {
    const nuevaLista = hotelsData
      .filter((hotelData) => {
        // filtro de PAISES
        if (locateCountry !== "todos") {
          return hotelData.country === locateCountry;
        }
        return hotelData;
      }) // filtro de HABITACIONES
      .filter((hotelData) => {
        if (roomSize === "GRA") {
          return hotelData.rooms >= 32;
        }
        if (roomSize === "MED") {
          return hotelData.rooms >= 12 && hotelData.rooms < 32;
        }
        if (roomSize === "PEQ") {
          return hotelData.rooms >= 0 && hotelData.rooms < 12;
        }
        return true; // retorna cierto, es decir "todos"
      }) // filtro de PRECIOS
      .filter((hotelData) => {
        if (priceCost === "LUJ") {
          return hotelData.price === 4;
        }
        if (priceCost === "MOD") {
          return hotelData.price === 3;
        }
        if (priceCost === "ECO") {
          return hotelData.price >= 0 && hotelData.price <= 2;
        }
        return true;
      }).filter((hotelData) => {
        if (arrivalDateUnix !== null && departureDateUnix !== null) {
          return arrivalDateUnix >= hotelData.availabilityFrom && departureDateUnix <= hotelData.availabilityTo;
        }
        return true;
      });

    return nuevaLista;
  };

  let listaFiltrada = crearLista();

// Las cards filtradas de manera GLOBAL
  const HotelesCards = () => {
    return(
      <div className="c0ntainer">
        {listaFiltrada.length === 0 ? (<><NotResult/></>) :
        (listaFiltrada.map((hotelData, index) => {
            return (
              <Card
                key={index}
                photo={hotelData.photo}
                name={hotelData.name}
                description={hotelData.description}
                rooms={hotelData.rooms}
                city={hotelData.city}
                country={hotelData.country}
                price={hotelData.price}
                dateTo={hotelData.availabilityTo}
                dateFrom={hotelData.availabilityFrom}
              />);
            })
          )
        }  
      </div>
    )
  };

   // Los tres pilares principales de la aplicación.
  return (
    <>
      <Header />
      <Filter />
      <HotelesCards />
    </>
  );
}

