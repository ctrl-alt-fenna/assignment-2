import ProfileTranslationHistoryItem from './ProfileTranslationHistoryItem';
import React from 'react'
const ProfileTranslateHistory = ({ translations }) => {
  // using map function to loop in translation history,
  const translatedHistory = translations.map(
    (translationItem, index) => <ProfileTranslationHistoryItem key={index + '_' + translationItem} translationItem={translationItem} count={index}/>)

  return (
    <section>
      <h4 id='title-translate-history'>Your Translation History:</h4>
        <div id='history-list'>
          {translatedHistory}
        </div>
    </section>
  )
}
export default ProfileTranslateHistory
