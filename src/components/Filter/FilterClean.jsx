import iconDelete from "../../resources/Icon-delete.svg";

export default function FilterClean() {
//Colocar en el on click una funcion que devuelta el estado original de los estados del filtro

    const borrarFiltro = () => {
        return console.log('delete')
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