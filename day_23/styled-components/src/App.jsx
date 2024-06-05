import "./App.css";
import React, { useEffect, useState } from "react";
import CardFactory from "./components/card/CardFactory";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme";
import image from "./assets/image.png";
import axios from "axios";

function App() {
  const [themeState, setThemeState] = useState(false);
  const [data, setData] = useState([]);

  function fetchData() {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        setData(response?.data?.products);
      })
      .catch(function (error) {
        console.log(error, "");
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const toggleTheme = () => {
    setThemeState(!themeState);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          flexWrap:"wrap",
          gap: "20px",
          width: "100%",
          height: "100vh",
          background: `${themeState ? "black" : "white"}`,
        }}
      >
        {/* <button onClick={toggleTheme}>Switch</button> */}
        {data?.map((item) => {
          <CardFactory
            title={`${item.title}`}
            description={`${item.description}`}
            imagePath={`${item.images[0]}`}
          />;
        })}
      </div>
    </ThemeProvider>
  );
}

export default App;
