import ProfileAction from '../components/Profiles/ProfileAction';
import ProfileHeader from "../components/Profiles/ProfileHeader";
import ProfileTranslateHistory from "../components/Profiles/ProfileTranslateHistory";
import React from "react"
import {useUser} from "../context/UserContext"
import withAuth from '../hoc/withAuth';

const Profile = () => {

  const { user } = useUser()

  return (
    <>
      <h1>Profile</h1>
      <ProfileHeader username={user.username}/>
      <ProfileAction/>
      <ProfileTranslateHistory/>
    </>
  )
}
export default withAuth(Profile)
