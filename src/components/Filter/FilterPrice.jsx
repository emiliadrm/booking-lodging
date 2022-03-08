import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

export default function FilterPrice(){
  const { priceCost, setPriceCost } = useContext(AppContext);

  const cambiarPrice = (e) => {
    let priceCost = e.target.value;
    setPriceCost(priceCost);
  };

  return(
    <>
      <div className="flexStyleComponent">
        <label htmlFor="priceSelection">Costo</label>
        <select id="priceSelection" className="StyleInput" value={priceCost} onChange={cambiarPrice}>
          <option value="todos">¿Cuánto?</option>
          <option value="ECO">Economico</option>
          <option value="MOD">Moderado</option>
          <option value="LUJ">Lujoso</option>
        </select>
      </div>
    </>
  )
}