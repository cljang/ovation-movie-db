import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { navMainLinks } from "../global/globals";
import { closeNav } from "../features/navOpen/navOpenSlice"
import SearchBar from "./SearchBar";

function NavMain() {

  const navOpen = useSelector((state) => state.navOpen.value);
  
  const dispatch = useDispatch()

  const hideNav = () => {
    dispatch(closeNav())
  }

  return (
    <div className={"navbar-menu" + (navOpen ? " navbar-toggled" : "")}>
      <SearchBar />
      <nav>
        <ul>
          {navMainLinks.map(link => {
            return(
              <li key={link.name}>
                <NavLink to={link.path}
                         onClick={hideNav}>
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