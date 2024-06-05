import Wrapper from "./components/wrapper/Wrapper";

import ButtonFactory from "./components/button/ButtonFactory";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Wrapper>
        <Login />
      </Wrapper>
    </>
  );
}

export default App;
