// Boton con función de ALERT
export default function ButtonCardContainer() {
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
  