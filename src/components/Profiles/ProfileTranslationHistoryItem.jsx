import React from 'react'

const ProfileTranslationHistoryItem = ({translationItem, count}) => {
  return count < 10 ? <p id="profile-history">{translationItem}</p> : <></>
}
export default ProfileTranslationHistoryItem
