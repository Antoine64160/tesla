import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModelS from "./components/ModelS";
import Model3 from "./components/Model3";
import ModelX from "./components/ModelX";
import ModelY from "./components/ModelY";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/model3" element={<Model3 />} />
          <Route path="/modelS" element={<ModelS />} />
          <Route path="/modelX" element={<ModelX />} />
          <Route path="/modelY" element={<ModelY />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
