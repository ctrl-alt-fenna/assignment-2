import ProfileAction from '../components/Profiles/ProfileAction';
import ProfileHeader from "../components/Profiles/ProfileHeader";
import ProfileTranslateHistory from "../components/Profiles/ProfileTranslateHistory";
import React from "react"
const Profile = () => {

  // const { user } = useUser()

  return (
    <>
      <h1>Profile</h1>
      <ProfileHeader/>
      <ProfileAction/>
      <ProfileTranslateHistory/>
    </>
  )
}
export default Profile
