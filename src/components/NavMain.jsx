import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

function NavMain() {

  const navOpen = useSelector((state) => state.navOpen.value);

  return (
    <nav className={"navbar-nav" + (navOpen ? " navbar-toggled" : "")}>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/favourites">Favourites</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavMain