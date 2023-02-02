import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./header";
import TarihSec from "./tarihSec";

import Main from "./Main";

function App() {
  document.querySelectorAll(".Fly>i").forEach((v, k) => {
    v.style.animationDelay = k / 9 + "s";
  });

  const [data, setData] = useState({});
  const [zaman, setZaman] = useState("2023-02-02");

  const degistir = (e) => {
    setZaman(e);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?date=" +
          zaman +
          "&api_key=gDLpfum6UipWlZObzeEnZVXReHJ9K1tWzNvSLI5j"
      )
      .then((res) => {
        setData(res.data);
      });
  }, [zaman]);

  return (
    <div className="App">
      <Header />
      <TarihSec degistir={degistir} zaman={zaman} />
      <Main data={data} />
    </div>
  );
}

export default App;
