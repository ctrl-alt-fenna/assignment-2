import ProfileAction from '../components/Profiles/ProfileAction';
import ProfileHeader from "../components/Profiles/ProfileHeader";
import ProfileTranslateHistory from "../components/Profiles/ProfileTranslateHistory";
import React from "react"
import { useUser } from "../context/UserContext"
import withAuth from '../hoc/withAuth';

const Profile = () => {

  const { user } = useUser()

  return (
    <>
      <ProfileHeader username={user.username} />
      <ProfileAction />
      <ProfileTranslateHistory translations={user.translations} />
    </>
  )
}
export default withAuth(Profile)
