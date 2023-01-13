import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModelS from "./components/ModelS";
import Model3 from "./components/Model3";
import ModelX from "./components/ModelX";
import ModelY from "./components/ModelY";
import Home from "./components/Home";
import Layout from "./components/Layout";
import LocY from "./components/Loc Y";
import LocS from "./components/Loc S";
import Loc3 from "./components/Loc 3";
import LocX from "./components/Loc X";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/model3" element={<Model3 />} />
            <Route path="/modelS" element={<ModelS />} />
            <Route path="/modelX" element={<ModelX />} />
            <Route path="/modelY" element={<ModelY />} />
            <Route path="/Location3" element={<Loc3 />} />
            <Route path="/LocationS" element={<LocS />} />
            <Route path="/LocationX" element={<LocX />} />
            <Route path="/LocationY" element={<LocY />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
