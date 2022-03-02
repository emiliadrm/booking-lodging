export function Header() {
  return (
    <>
      <HeaderBar/>
      <div className="barFiltroCenter" style={{ backgroundImage: `url(${bannerImg})` }}></div>
    </>
  )
}

function HeaderBar() {
  return(
    <nav className="logoName">
      <img width="27px" src={logo} alt="" />
      <h1 className="nav-tittle">Hoteles</h1>
    </nav>
  )
}

// Función que junta la imagen de fondo(HTML), el bar de Filtro, y de lo seleccionado en el filtro.