import React from 'react'
import { GetInTouch, KnowMe, Submit } from './buttonStyle'

const ButtonFactory = ({type}) => {
  switch (type) {
    case "submit": return <Submit>Submit</Submit>
    case "get-in-touch": return <GetInTouch>Get in Touch</GetInTouch>
    case "know-me": return <KnowMe>Know Me</KnowMe>
    default: return <Submit>Submit</Submit>
  }
}

export default ButtonFactory
