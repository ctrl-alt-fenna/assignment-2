import React from 'react'
// display translated history with index
const ProfileTranslationHistoryItem = ({translationItem, count}) => {
  return count < 10 ? <p id="profile-history">{count+1}_{translationItem}</p> : <></>
}
export default ProfileTranslationHistoryItem
