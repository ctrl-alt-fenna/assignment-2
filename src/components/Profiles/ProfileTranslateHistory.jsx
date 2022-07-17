import ProfileTranslationHistoryItem from './ProfileTranslationHistoryItem';
import React from 'react'
const ProfileTranslateHistory = ({ translations }) => {

  const translatedHistory = translations.map(
    (translationItem, index) => <ProfileTranslationHistoryItem key={index + '_' + translationItem} translationItem={translationItem} count={index}/>)

  return (
    <section>
      <h4>Translation History</h4>
        {translatedHistory}
    </section>
  )
}
export default ProfileTranslateHistory
