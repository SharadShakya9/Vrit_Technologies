import React from 'react'
import './button.css'

const ButtonFactory = ({type}) => {
  switch ( type ) {
    case "download": return <button className="download">Download</button>;
    case "settings": return <button className="settings">Settings</button>;
    case "home": return <button className="home">Home</button>;
    default: return <button className="home">Home</button>
  }
}


export default ButtonFactory
