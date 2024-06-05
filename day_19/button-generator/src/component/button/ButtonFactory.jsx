import './button.css'
import IconFactory from '../icon/IconFactory';

function ButtonFactory( { type } ) {
  switch ( type ) {
    case "download": return <button className="download"><IconFactory iconName="download"/>Download</button>;
    case "settings": return <button className="settings"><IconFactory iconName="settings"/>Settings</button>;
    case "home": return <button className="home"><IconFactory iconName="homee"/>Home</button>;
    default: return <button className="home"><IconFactory iconName="home"/>Home</button>
  }
}

export default ButtonFactory;
