import { logDOM } from "@testing-library/react";
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Agendamento from "./Pages/Agendamento";

function App() {
  return (
      <div className="Rotas">
        <Router>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/agendamento" element={<Agendamento />}/>
          </Routes>
        </Router>

      </div>
  );
}

export default App;