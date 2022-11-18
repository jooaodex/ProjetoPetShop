import { useState, useEffect } from "react";
import { logDOM } from "@testing-library/react";
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Agendamento from "./Pages/Agendamento"

import api from './api.js'
import axios from 'axios'

function App() {

  useEffect(() => {
    api.get('home').then(res => {
      console.log(res.data)
    })
  }, [])

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