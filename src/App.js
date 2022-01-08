import React, {useState, useEffect} from "react"
import {Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routers/Home"
import Details from "./routers/detail"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes><Routes>
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
