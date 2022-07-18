import ProfileAction from '../components/Profiles/ProfileAction';
import ProfileHeader from '../components/Profiles/ProfileHeader';
import ProfileTranslateHistory from '../components/Profiles/ProfileTranslateHistory';
import React from 'react'
import withAuth from '../hoc/withAuth';
import { useUser } from '../context/UserContext';


const Profile = () => {
    const { user } = useUser()
	return (
    <div id='profile'>
			<ProfileHeader username={user.username} />
			<ProfileTranslateHistory translations={user.translations} />
      <ProfileAction />
    </div>
	)
}
export default withAuth(Profile)
