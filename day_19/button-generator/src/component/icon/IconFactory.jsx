import React from 'react'
import "./icon.css"
import homeIcon from "../../assets/house-solid.svg"
import settingsIcon from "../../assets/gear-solid.svg"
import downloadIcon from "../../assets/download-solid.svg"

const IconFactory = ( {iconName} ) => {
  switch (iconName) {
    case "home": return <img src={homeIcon} alt="home" className='icon home' />
    case "settings": return <img src={settingsIcon} alt="settings" className='icon' />
    case "download": return <img src={downloadIcon} alt="download" className='icon' />
    default: return <img src={homeIcon} alt="home" className='icon' />
  }
}

export default IconFactory
