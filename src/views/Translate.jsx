import React from "react"
import TranslationForm from "../components/Translation/TranslationForms"
const Translate = () => {
  return (
    <>
    <TranslationForm/>
    </>
  )
}
export default withAuth(Translate)
