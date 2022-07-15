import { NavLink } from "react-router-dom"
import React from "react"
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { storageDelete } from '../../utils/storage';
import {useUser} from "../../context/UserContext"
const Navbar = () => {
  const {user, setUser} = useUser()



  const handleLogoutClick = () => {
    if (window.confirm('Are you sure you want to log out?')) {
    storageDelete(STORAGE_KEY_USER)
    setUser(null)
    }
  }


  return (
    <nav>
      { user !== null &&
        <ul>
          <li>
            <NavLink to="/translate">Translate</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/"><button onClick={handleLogoutClick}>Logout</button></NavLink>
          </li>
        </ul>
      }
    </nav>
  )
}
export default Navbar
