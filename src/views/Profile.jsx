import ProfileAction from '../components/Profiles/ProfileAction';
import ProfileHeader from "../components/Profiles/ProfileHeader";
import ProfileTranslateHistory from "../components/Profiles/ProfileTranslateHistory";
import React, { useEffect } from "react"
import withAuth from '../hoc/withAuth';
import { findUserById } from '../api/user';
import { useUser } from '../context/UserContext';


const Profile = () => {
    const { user, setUser} = useUser()
    useEffect(() =>{
        const findUser = async () => {
            const [error, latestUser] = await findUserById(user.id)
            if (error === null) {
                setUser(latestUser)
            }
        }
        // findUser()
    },[])
	return (
    <div id="profile">
			{/* <h2>Profile</h2> */}
			<ProfileHeader username={user.username} />
			<ProfileTranslateHistory translations={user.translations} />
      <ProfileAction />
    </div>
	)
}
export default withAuth(Profile)
