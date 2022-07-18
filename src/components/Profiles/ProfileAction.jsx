import React, { useState } from 'react';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { storageDelete, storageSave } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
import { clearUserHistory } from '../../api/translate';
import { Navigate } from 'react-router-dom'
const ProfileAction = () => {
	const { user, setUser } = useUser()
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

    /*  Function to clear user history on click of button
        INPUT: Userdata from local storage
        OUTPUT: Cleared translations and storage
    */
	const handleClearClick = async () => {
		setLoading(true)
		const [error, response] = await clearUserHistory(user)
		if (error !== null) setApiError(error)
        setUser(response)
        storageSave(STORAGE_KEY_USER, response)
        setLoading(false)
	}
	return (
		<div className='profile-btns'>
			<button className='profile-btn' onClick={handleClearClick}>Clear History</button>
			<button className='profile-btn' onClick={handleLogoutClick}>Logout</button>
			{loading && <p>Loading...</p>}
			{apiError && <p>{apiError}</p>}
		</div>
	)
}
export default ProfileAction
