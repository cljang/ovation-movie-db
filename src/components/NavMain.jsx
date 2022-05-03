import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { navMainLinks } from "../global/globals";
import { closeNav } from "../features/navOpen/navOpenSlice"

function NavMain() {

  const navOpen = useSelector((state) => state.navOpen.value);
  
  const dispatch = useDispatch()

  const hideNav = () => {
    dispatch(closeNav())
  }

  return (
    <nav className={"navbar-nav" + (navOpen ? " navbar-toggled" : "")}>
      <ul>
        {navMainLinks.map(link => {
          return(
            <li>
              <NavLink to={link.path}
                       onClick={hideNav}>
                {link.name}
              </NavLink>
            </li>
          )
          })}
      </ul>
    </nav>
  )
}

export default NavMain