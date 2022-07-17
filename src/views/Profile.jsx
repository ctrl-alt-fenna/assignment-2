import ProfileAction from '../components/Profiles/ProfileAction';
import ProfileHeader from "../components/Profiles/ProfileHeader";
import ProfileTranslateHistory from "../components/Profiles/ProfileTranslateHistory";
import { STORAGE_KEY_USER } from '../const/storageKeys';
import { storageRead } from '../utils/storage';
import React from "react"
import withAuth from '../hoc/withAuth';

const Profile = () => {

	const user = storageRead(STORAGE_KEY_USER) 
	return (
        <div id="profile">
			<h1>Profile</h1>
			<ProfileHeader username={user.username} />
			<ProfileAction />
			<ProfileTranslateHistory translations={user.translations} />
        </div>
	)
}
export default withAuth(Profile)
