import React from "react";
import iconDate from "../../resources/Icon-date-range.svg";
import iconBed from "../../resources/Icon-bed.svg";
import iconLocation from "../../resources/Icon-location-on.svg";
import ButtonCard from "./ButtonCard";
import PriceRender from "./PriceRender";
import DateCard from "./DateCard";

export default function Card({ name, city, country, rooms, description, price, photo, dateTo, dateFrom}) {

  return (
    <>
      <div className="big-container">                                           {/*Este tiene las propiedades externas individuales de cada card*/}
        <div className="card-style">                                            {/*Este tiene el estilo externo individual de cada card*/}
          <h2 className="tittleName">{name}</h2>                                {/*Nombre del lugar*/}
          <div className="componentTextCardStyle">
            <img src={iconLocation} alt="" />
            <h3 className="marginTextCardStyle">{city}, {country}</h3>          {/*Ciudad y pais*/}
          </div>
          <div className="componentTextCardStyle">
            <img src={iconDate} alt="" />
            <DateCard dateTo={dateTo} dateFrom={dateFrom}/>                                            {/*Aqui va una funcion que de la fecha en string*/}
          </div>
          <div className="componentTextCardStyle">
            <img src={iconBed} alt="" />
            <h3 className="marginTextCardStyle">{rooms} Habitaciones</h3>       {/*Cuantas habitaciones*/}
          </div>
          <div className="componentBlockCardStyle">
            <h4>Descripción</h4>
            <div className="blackLineComponent"></div>
            <p>{description}</p>                                                {/*Descripcion*/}
          </div>
          <div className="photoComponentStyle">
            <img className="photoStyle" width="300px" src={photo} alt={name} /> {/*Foto*/}
          </div>
          <div className="containerPriceButton">
            <div><h4 className="priceTittleName">Precio:</h4><PriceRender props={price}/></div> {/*Precio*/}
            <ButtonCard/>
          </div>
        </div>
      </div>
    </>
  );
}


// Función que crea la card con la info. No entiendo esta funcion/
/*
function HotelCard({ photo, name, description, rooms, city, country, price, date}) {
  return (
    <div className="CardDiv"> // ESTOS ESTILOS ME PREOCUPAN
      <div className="card-container">  // ESTOS ESTILOS ME PREOCUPAN
        <Card
          photo={photo}
          name={name}
          description={description}
          rooms={rooms}
          city={city}
          country={country}
          price={price}
        />
      </div>
    </div>
  );
}*/