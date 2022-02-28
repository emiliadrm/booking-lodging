import React, { useState } from "react";
import "./styles.css";
import { hotelsData } from "./data";
import { Card, Header } from "./components";
import { SelectText } from "./textoFiltro";
import bannerImg from "./resources/BannerImage.jpg";
import iconDelete from "./resources/Icon-delete.svg";

export default function App() {
  // ESTADO PARA FECHAS DE SALIDA Y LLEGADA
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  // FUNCIONES DE: actualizar pais, filtrar pais y mostrar pais (el unico que tiene mostrar pais)
  const [pais, actualizarPais] = useState("todos");

  const cambiarPais = (objetoEvento) => {
    let pais = objetoEvento.target.value;
    actualizarPais(pais);
  };

  const mostrarPaisGlobal = (pais) => {
    if (pais !== "todos") {
      return `En ${pais}`;
    }
    return `En cualquier lugar`;
  };

  // FUNCIONES DE: actualizar habitaciones, filtrar habitaciones
  const [rooms, actualizarHab] = useState("todos");

  const cambiarHabGlobal = (objetoEvento) => {
    let rooms = objetoEvento.target.value;
    actualizarHab(rooms);
  };

  const mostrarHabGlobal = (rooms) => {
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

  // FUNCIONES DE: actualizar precio, filtrar precios
  const [price, actualizarPrice] = useState("todos");

  const cambiarPriceGlobal = (objetoEvento) => {
    let price = objetoEvento.target.value;
    actualizarPrice(price);
  };

  const mostrarPriceGlobal = (price) => {
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

  // FUNCION QUE filtra por opciones
  const crearLista = () => {
    const nuevaLista = hotelsData
      .filter((hotelData) => {
        // filtro de PAISES
        if (pais !== "todos") {
          return hotelData.country === pais;
        }
        return hotelData;
      }) // filtro de HABITACIONES
      .filter((hotelData) => {
        if (rooms === "GRA") {
          return hotelData.rooms >= 32;
        }
        if (rooms === "MED") {
          return hotelData.rooms >= 12 && hotelData.rooms < 32;
        }
        if (rooms === "PEQ") {
          return hotelData.rooms >= 0 && hotelData.rooms < 12;
        }
        return true; // retorna cierto, es decir "todos"
      }) // filtro de PRECIOS
      .filter((hotelData) => {
        if (price === "LUJ") {
          return hotelData.price === 4;
        }
        if (price === "MOD") {
          return hotelData.price === 3;
        }
        if (price === "ECO") {
          return hotelData.price >= 0 && hotelData.price <= 2;
        }
        return true;
      })
      .filter((hotelData) => {
        // filtro de fecha
        return hotelData;
      })
      .filter((hotelData) => {
        return true;
      });

    return nuevaLista;
  };

  let listaFiltrada = crearLista();

  // Las cards filtradas de manera GLOBAL

  const renderCards = () => {
    return listaFiltrada.map((hotelData, index) => {
      return (
        <HotelCard
          key={index}
          photo={hotelData.photo}
          name={hotelData.name}
          description={hotelData.description}
          rooms={hotelData.rooms}
          city={hotelData.city}
          country={hotelData.country}
          price={hotelData.price}
        />
      );
    });
  };

  const HotelesCards = () => {
    return <div className="c0ntainer">{renderCards()}</div>;
  }; // resolver este problema de estilo

  // Los tres pilares principales de la aplicación.
  return (
    <>
      <Header />
      <Filtros
        pais={pais}
        cambiarPais={cambiarPais}
        mostrarPais={mostrarPaisGlobal}
        price={price}
        cambiarPrice={cambiarPriceGlobal}
        mostrarPrice={mostrarPriceGlobal}
        rooms={rooms}
        cambiarHab={cambiarHabGlobal}
        mostrarHab={mostrarHabGlobal}
        arrivalDate={arrivalDate}
        departureDate={departureDate}
        setArrivalDate={setArrivalDate}
        setDepartureDate={setDepartureDate}
      />
      <HotelesCards />
    </>
  );
}

// Función que crea la card con la info.
function HotelCard(hotelInf) {
  return (
    <div className="CardDiv">
      <div className="card-container">
        <Card
          photo={hotelInf.photo}
          name={hotelInf.name}
          description={hotelInf.description}
          rooms={hotelInf.rooms}
          city={hotelInf.city}
          country={hotelInf.country}
          price={hotelInf.price}
        />
      </div>
    </div>
  );
}

// Función que junta la imagen de fondo(HTML), el bar de Filtro, y de lo seleccionado en el filtro.
function Filtros(props) {
  return (
    <div
      className="barFiltroCenter"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <Navegacion
        pais={props.pais}
        cambiarPais={props.cambiarPais}
        rooms={props.rooms}
        cambiarHab={props.cambiarHab}
        price={props.price}
        cambiarPrice={props.cambiarPrice}
        arrivalDate={props.arrivalDate}
        departureDate={props.departureDate}
        setArrivalDate={props.setArrivalDate}
        setDepartureDate={props.setDepartureDate}
      />
      <SelectText
        pais={props.pais}
        mostrarPais={props.mostrarPais}
        price={props.price}
        mostrarPrice={props.mostrarPrice}
        rooms={props.rooms}
        mostrarHab={props.mostrarHab}
      />
    </div>
  );
}

// TODA LA PARTE FUNCIONALIDAD DE FILTRO
function Navegacion({
  pais,
  cambiarPais,
  rooms,
  cambiarHab,
  price,
  cambiarPrice,
  arrivalDate,
  setArrivalDate,
  departureDate,
  setDepartureDate
}) {
  const guardarFechaSalida = (evento) => {
    const fecha = evento.target.value;
    setDepartureDate(fecha);
  };
  const guardarFechaLlegada = (evento) => {
    const fecha = evento.target.value;
    setArrivalDate(fecha);
  };

  return (
    <form className="barFiltroComponentStyle">
      <div className="flexStyleComponent">
        <label htmlFor="countrySelection">Ubicación</label>
        <select
          id="countrySelection"
          className="StyleInput"
          value={pais}
          onChange={cambiarPais}
        >
          <option value="todos">¿A dónde vas?</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>
      </div>
      <div className="flexStyleComponent">
        <label htmlFor="arrivalDateSelection">Llegada</label>
        <input
          id="arrivalDateSelection"
          className="StyleInput"
          type="date"
          value={arrivalDate}
          onChange={guardarFechaLlegada}
        />
      </div>
      <div className="flexStyleComponent">
        <label htmlFor="departureDateSelection">Salida</label>
        <input
          id="departureDateSelection"
          className="StyleInput"
          type="date"
          value={departureDate}
          onChange={guardarFechaSalida}
        />
      </div>
      <div className="flexStyleComponent">
        <label htmlFor="roomSelection">Habitaciones</label>
        <select
          id="roomSelection"
          className="StyleInput"
          value={rooms}
          onChange={cambiarHab}
        >
          <option value="todos">¿Cuantás?</option>
          <option value="GRA">Grandes</option>
          <option value="MED">Medianas</option>
          <option value="PEQ">Pequeñas</option>
        </select>
      </div>
      <div className="flexStyleComponent">
        <label htmlFor="priceSelection">Costo</label>
        <select
          id="priceSelection"
          className="StyleInput"
          value={price}
          onChange={cambiarPrice}
        >
          <option value="todos">¿Cuánto?</option>
          <option value="ECO">Economico</option>
          <option value="MOD">Moderado</option>
          <option value="LUJ">Lujoso</option>
        </select>
      </div>
      <div className="flexStyleComponent">
        <label htmlFor="">Limpiar</label>
        <img onClick="" width="31px" src={iconDelete} alt="" />
        {/*Colocar en el on click una funcion que devuelta el estado original de los estados del filtro*/}
      </div>
    </form>
  );
}
