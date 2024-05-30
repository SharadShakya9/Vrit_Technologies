import "./App.css";
import ButtonFactory from "./component/button";

function App() {
  return (
    <>
      <ButtonFactory />
      <ButtonFactory type="download" />
      <ButtonFactory type="export"/>
      <ButtonFactory type="submit"/>
      <ButtonFactory type="cancel"/>
    </>
  );
}

export default App;
