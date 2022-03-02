import React, { useState} from "react";

export const AppContext = React.createContext();

export default function AppProvider(props){
 // ESTADO PARA FECHAS DE SALIDA Y LLEGADA
    const [arrivalDate, setArrivalDate] = useState("");
    const [departureDate, setDepartureDate] = useState("");

 // FUNCIONES DE: actualizar pais, filtrar pais y mostrar pais (el unico que tiene mostrar pais)
    const [locateCountry, setLocateCountry] = useState("todos");

// FUNCIONES DE: actualizar habitaciones, filtrar habitaciones
    const [roomSize, setRoomSize] = useState("todos");

// FUNCIONES DE: actualizar precio, filtrar precios
    const [priceCost, setPriceCost] = useState("todos");
    
    return(
     <AppContext.Provider 
        value={{arrivalDate,
                setArrivalDate,
                departureDate,
                setDepartureDate,
                locateCountry,
                setLocateCountry,
                roomSize,
                setRoomSize,
                priceCost,
                setPriceCost}}>
         {props.children}
     </AppContext.Provider>
    )
}

