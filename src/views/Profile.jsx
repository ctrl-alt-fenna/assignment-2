import ProfileAction from '../components/Profiles/ProfileAction';
import ProfileHeader from "../components/Profiles/ProfileHeader";
import ProfileTranslateHistory from "../components/Profiles/ProfileTranslateHistory";
import React from "react"
import { STORAGE_KEY_USER } from '../const/storageKeys';
import { storageRead } from '../utils/storage';
import withAuth from '../hoc/withAuth';

const Profile = () => {

	const user = storageRead(STORAGE_KEY_USER)
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
