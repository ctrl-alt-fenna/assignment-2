import ProfileTranslationHistoryItem from './ProfileTranslationHistoryItem';
import React from 'react'
const ProfileTranslateHistory = ({translations}) => {

  const translatedHistory = translations.map(
    (aHistory, index) => <ProfileTranslationHistoryItem key={index + '_' + aHistory} aHistory={aHistory} /> )

  return (
    <section>
      <h4>Your history translations</h4>
      <ul>
        {translatedHistory}
      </ul>
    </section>
  )
}
export default ProfileTranslateHistory
