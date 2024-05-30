import './button.css'

function ButtonFactory({ type }) {
  switch (type) {
    case "download": return <button className="download">Download</button>;
    case "submit": return <button className="submit">Submit</button>;
    case "export": return <button className="export">Export</button>;
    case "cancel": return <button className="cancel">Cancel</button>;
    default: return <button className='submit'>Submit</button>
  }
}

export default ButtonFactory;
