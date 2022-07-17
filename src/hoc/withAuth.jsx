import { Navigate } from "react-router-dom"
import React from "react"
import { useUser } from "../context/UserContext"
/*  Function to authenticate user or navigate to login page if they are not
	INPUT: Component and its props
	OUTPUT: Redirects if user is not logged int or returns component if they are
*/
const withAuth = Component => props => {
	const { user } = useUser()
	if (user !== null) {
		return <Component {...props} />
	} else {
		return <Navigate to="/" />
	}
}
export default withAuth
