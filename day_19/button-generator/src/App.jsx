import "./App.css";
import ButtonFactory from "./component/button/ButtonFactory";

function App() {
  return (
    <>
      <ButtonFactory />
      <ButtonFactory type="download" />
      <ButtonFactory type="home"/>
      <ButtonFactory type="settings"/>
    </>
  );
}

export default App;
