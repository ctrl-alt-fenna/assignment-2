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
      <>
            <NavLink to="/translate">Translate</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/" onClick={handleLogoutClick}>Logout</NavLink>
      </>
      }
    </nav>
  )
}
export default Navbar
