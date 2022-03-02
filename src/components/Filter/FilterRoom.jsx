import React, { useContext } from "react";
import { AppContext } from "./context/AppProvider";

export default function FilterRoom() {
  const { setRoomSize, roomSize } = useContext(AppContext);

  const cambiarHab = (e) => {
    let roomSize = e.target.value;
    setRoomSize(roomSize);
  };

  return(
    <>
      <div className="flexStyleComponent">
        <label htmlFor="roomSelection">Habitaciones</label>
        <select id="roomSelection" className="StyleInput" value={roomSize} onChange={cambiarHab}>
          <option value="todos">¿Cuantás?</option>
          <option value="GRA">Grandes</option>
          <option value="MED">Medianas</option>
          <option value="PEQ">Pequeñas</option>
        </select>
      </div>
    </>
  )
}