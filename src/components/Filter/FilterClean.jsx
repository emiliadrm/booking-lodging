import iconDelete from "../../resources/Icon-delete.svg";

export default function FilterClean() {
//Colocar en el on click una funcion que devuelta el estado original de los estados del filtro
    return(
        <>
         <div className="flexStyleComponent">
          <label>Limpiar</label>
          <img onClick="" width="31px" src={iconDelete} alt="" />
        </div>
        </>
    )
}