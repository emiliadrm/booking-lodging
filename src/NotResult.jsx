import imgNotResult from "./resources/noresult.svg"

export default function NotResult(){
    return(
        <div className="notResultStyle"> 
            <img src={imgNotResult} alt="" className="imgNotResultStyle"/>
            <span className="textNotResult">Lo siento, no encontramos una búsqueda que coincida. Intenta con otra búsqueda</span>
        </div>
    )
}