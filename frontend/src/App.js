import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={ <Contact/>} path='/contact' exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
