import { Link } from 'react-router-dom'
import React from 'react'
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { storageDelete } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
const ProfileAction = () => {
  const {setUser} = useUser()

  const handleLogoutClick = () => {
    if (window.confirm('Are you sure you want to log out?')) {
    storageDelete(STORAGE_KEY_USER)
    setUser(null)
    }
  }
  return (
    <ul>
      <li><button type="">Clear history</button></li>
      <li><button onClick={handleLogoutClick}>Logout</button></li>
    </ul>
  )
}
export default ProfileAction
