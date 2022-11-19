import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import api from '../api.js'
import { useState, useEffect } from "react";

function Agendamento() {

  return (
    <div className='agendamento'>
      <div className='divtopo'>
        <h1>Banho e Tosa</h1>
        <h2>Faça o agendamento para o banho e tosa do seu pet aqui</h2>
      </div>

      <div className='divCalendar'>
        <Calendar className='calendar' />
      </div>
    </div>


  )
};

export default Agendamento;