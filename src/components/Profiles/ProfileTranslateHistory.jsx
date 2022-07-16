import ProfileTranslationHistoryItem from './ProfileTranslationHistoryItem';
import React from 'react'
const ProfileTranslateHistory = ({translations}) => {

  const translatedHistory = translations.map(
    (translationItem, index) => <ProfileTranslationHistoryItem key={index + '_' + translationItem} translationItem={translationItem} /> )

  return (
    <section>
      <h4>Translation History</h4>
      <ul>
        {translatedHistory}
      </ul>
    </section>
  )
}
export default ProfileTranslateHistory
