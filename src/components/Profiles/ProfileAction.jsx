import { Link } from 'react-router-dom'
import React from 'react'
import { storageRead } from '../../utils/storage';
import { useState } from 'react';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { storageDelete } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
import { clearUserHistory } from '../../api/translate';
import { checkForUser } from '../../api/user';
const ProfileAction = () => {
  const { setUser } = useUser()

  const handleLogoutClick = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      storageDelete(STORAGE_KEY_USER)
      setUser(null)
    }
  }
  // Make it possible to display loading/error states
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)

  const handleClearClick = async () => {
    setLoading(true)
    let userData = storageRead(STORAGE_KEY_USER)
    if (userData === null) return
    const [userError, user] = await checkForUser(userData.username)
    if (userError) throw new Error("Cannot retrieve userdata")
    const [error, response] = await clearUserHistory(user[0])
    if (error !== null) setApiError(error)
    setLoading(false)
  }
  return (
    <>
      <button id="profile-btn" onClick={handleClearClick}>Clear history</button>
      <button id="profile-btn" onClick={handleLogoutClick}>Logout</button>
    </>
  )
}
export default ProfileAction
