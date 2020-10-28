import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Shop from "./components/Shop.js";
import Menu from "./components/Menu.js";
import Clients from "./components/Clients.js";
import Prices from "./components/Prices.js";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
    </div>
  );
}

export default App;
