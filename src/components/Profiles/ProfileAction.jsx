import React, { useState } from 'react';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { storageDelete, storageRead, storageSave } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
import { clearUserHistory } from '../../api/translate';
import { checkForUser } from '../../api/user';
import { Navigate } from 'react-router-dom'
const ProfileAction = () => {
	const { setUser } = useUser()
	/*	Function to logout user from their profile
		INPUT: None
		OUTPUT: Clears any userdata from localstorage and redirects to login page
	*/
	const handleLogoutClick = () => {
		if (window.confirm('Are you sure you want to log out?')) {
			storageDelete(STORAGE_KEY_USER)
			setUser(null)
			return <Navigate to='/' />
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
		const response = await clearUserHistory(user[0])
		if (response.error !== null) setApiError(response.error)
        const updated = await checkForUser(userData.username)
        storageDelete(STORAGE_KEY_USER)
        storageSave(STORAGE_KEY_USER, updated[1][0])
        setUser(updated[1][0])
		setLoading(false)

	}
	return (
		<div className="profile-btns">
			<button className="profile-btn" onClick={handleClearClick}>Clear history</button>
			<button className="profile-btn" onClick={handleLogoutClick}>Logout</button>
			{loading && <p>Loading...</p>}
			{apiError && <p>{apiError}</p>}
		</div>
	)
}
export default ProfileAction
