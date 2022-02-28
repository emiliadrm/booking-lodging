import React from "react";
import logo from "./resources/logo.svg";
import iconDate from "./resources/Icon-date-range.svg";
import iconBed from "./resources/Icon-bed.svg";
import iconLocation from "./resources/Icon-location-on.svg";
import iconDolarEmpty from "./resources/Icon-dollar-sign-unk.svg";
import iconDolarFull from "./resources/Icon-dollar-sign-full.svg";
import bannerImg from "./resources/BannerImage.jpg";

export function Card(hotelInf) {
  return (
    <>
      <div className="big-container">
        {/*Este tiene las propiedades externas individuales de cada card*/}
        <div className="card-style">
          {/*Este tiene el estilo externo individual de cada card*/}
          <NameCardContainer name={hotelInf.name} />
          <LocationCardContainer
            city={hotelInf.city}
            country={hotelInf.country}
          />
          <DateCardContainer />
          <RoomCardContainer rooms={hotelInf.rooms} />
          <DescriptionCardContainer description={hotelInf.description} />
          <PhotoCardContainer photo={hotelInf.photo} name={hotelInf.name} />
          <div className="containerPriceButton">
            <PriceCardContainer price={hotelInf.price} />
            <ButtonCardContainer />
          </div>
        </div>
      </div>
    </>
  );
}

// Componentes de la card

function NameCardContainer({ name }) {
  return (
    <div className="tittleName">
      <h2>{name}</h2>
    </div>
  );
}

function LocationCardContainer({ city, country }) {
  return (
    <div className="componentTextCardStyle">
      <img src={iconLocation} alt="" />
      <h3 className="marginTextCardStyle">
        {city}, {country}
      </h3>
    </div>
  );
}

function DateCardContainer() {
  // Deberia haber una funcion que muestre la disponibilidad que tiene el lugar seleccionado
  return (
    <div className="componentTextCardStyle">
      <img src={iconDate} alt="" />
      <h3 className="marginTextCardStyle">02 Abril - 24 Abril, 2021</h3>
    </div>
  );
}

function RoomCardContainer({ rooms }) {
  return (
    <div className="componentTextCardStyle">
      <img src={iconBed} alt="" />
      <h3 className="marginTextCardStyle">{rooms} Habitaciones</h3>
    </div>
  );
}

function DescriptionCardContainer({ description }) {
  return (
    <div className="componentBlockCardStyle">
      <h4>Descripción</h4>
      <div className="blackLineComponent"></div>
      <p>{description}</p>
    </div>
  );
}

function PhotoCardContainer({ photo, name }) {
  return (
    <div className="photoComponentStyle">
      <img className="photoStyle" width="300px" src={photo} alt={name} />
    </div>
  );
}

function PriceCardContainer({ price }) {
  return (
    <div>
      <h4 className="priceTittleName">Precio:</h4>
      {DrawPrice(price)}
    </div>
  );
}

// Funcion que muestra una img full por cada price que hay

function DrawPrice(props) {
  if (props === 1) {
    return (
      <div className="priceDrawingComponent">
        <img src={iconDolarFull} alt="" />
        <img src={iconDolarEmpty} alt="" />
        <img src={iconDolarEmpty} alt="" />
        <img src={iconDolarEmpty} alt="" />
      </div>
    );
  }
  if (props === 2) {
    return (
      <div className="priceDrawingComponent">
        <img src={iconDolarFull} alt="" />
        <img src={iconDolarFull} alt="" />
        <img src={iconDolarEmpty} alt="" />
        <img src={iconDolarEmpty} alt="" />
      </div>
    );
  }
  if (props === 3) {
    return (
      <div className="priceDrawingComponent">
        <img src={iconDolarFull} alt="" />
        <img src={iconDolarFull} alt="" />
        <img src={iconDolarFull} alt="" />
        <img src={iconDolarEmpty} alt="" />
      </div>
    );
  }
  if (props === 4) {
    return (
      <div className="priceDrawingComponent">
        <img src={iconDolarFull} alt="" />
        <img src={iconDolarFull} alt="" />
        <img src={iconDolarFull} alt="" />
        <img src={iconDolarFull} alt="" />
      </div>
    );
  }
}

// Boton con función de ALERT

function ButtonCardContainer() {
  const mostrarAlert = () => {
    alert("Usted ha reservado con éxito!");
  };
  return (
    <>
      <button onClick={mostrarAlert} className="buttonStyle">
        Reservar
      </button>
    </>
  );
}

// Header e imagen del filtro, deberia ir en otro archivo?

export function Header() {
  return (
    <nav className="logoName">
      <img width="27px" src={logo} alt="" />
      <h1 className="nav-tittle">Hoteles</h1>
    </nav>
  );
}

export function BarImage() {
  return (
    <>
      <img className="bannerImgStyle" width="100%" src={bannerImg} alt="" />
    </>
  );
}
