import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { navMainLinks } from "../global/globals";
import { closeNav } from "../features/navOpen/navOpenSlice"
import SearchBar from "./SearchBar";

function NavMain({ reference }) {

  const navOpen = useSelector((state) => state.navOpen.value);
  
  const dispatch = useDispatch()

  const hideNav = () => {
    dispatch(closeNav())
  }

  return (
    <div className={"navbar-menu" + (navOpen ? " navbar-toggled" : "")} ref={reference}>
      <SearchBar />
      <nav >
        <ul>
          {navMainLinks.map(link => {
            return(
              <li key={link.name}>
                <NavLink to={link.path}
                         onClick={hideNav}
                         tabIndex={navOpen ? 0 : -1}>
                  {link.name}
                </NavLink>
              </li>
            )
            })}
        </ul>
      </nav>
    </div>
  )
}

export default NavMain