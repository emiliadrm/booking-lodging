import React, { useContext} from "react";
import iconDelete from "../../resources/Icon-delete.svg";
import { AppContext } from "../../context/AppProvider";

export default function FilterClean() {
//Colocar en el on click una funcion que devuelta el estado original de los estados del filtro
  const { arrivalDate, locateCountry, departureDate, roomSize, priceCost } = useContext(AppContext);

  const borrarFiltro = () => {
    arrivalDate('');
    departureDate('');
    locateCountry("todos");
    roomSize("todos");
    priceCost("todos");
  }

return(
        <>
         <div className="flexStyleComponent">
          <label>Limpiar</label>
          <button>
            <img onClick={borrarFiltro} width="31px" src={iconDelete} alt="" />
          </button>
          
        </div>
        </>
    )
}