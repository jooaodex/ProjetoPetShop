import 'react-calendar/dist/Calendar.css';
import api from '../api.js'
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import '../styles/agendamento.css'

function Agendamento() {

  return (
    <div className='agendamento'>
      <Header />
    <div class="full-content">
      <div className='boxAgendamento'>

        <form>
          <fieldset className='fieldAgendamento'>
            <legend id='legendAgendamento'><b>Realizar Agendamento</b></legend>

            <div className='boxInput'>
            <label for="nome" className='labelInput'>Nome</label>
            <input required type="text" name="nome" className='inputUser' />
            </div>
            <br></br><br></br>

            <div className='boxInput'>
            <label for="email" className='labelInput'>Telefone</label>
            <input required type="number" name="telefone"  className='inputUser' />
            </div>
            <br></br><br></br>

            <div className='boxInput'>
            <label for="cpf" className='labelInput'>CPF</label>
            <input required type="tel" name="cpf"  className='inputUser' />
            </div>
            <br></br><br></br>

            <div className='boxInput'>
            <label className='labelInput'>Tipo Animal</label>
            <br></br>
            <select className='selectUser' required>
            <option>Cachorro</option>
            <option>Gato</option>
            </select>
            </div>
            <br></br><br></br>

            <div className='boxInput'>
            <label className='labelInput'>Serviço</label>
            <br></br>
            <select required className='selectUser'>
            <option>Banho</option>
            <option>Banho e tosa</option>
            </select>
            </div>
            <br></br><br></br>

            <div className='boxInput'>
            <label className='labelInput'>Porte</label>
            <br></br>
            <select name='porte' required className='selectUser'>
            <option>Pequeno porte</option>
            <option>Médio Porte</option>
            <option>Grande Porte</option>
            </select>
            </div>
            <br></br><br></br>

            <label for="data_agendamento" id='labelData'><b>Dia e Hora</b></label> 
            <input type="Date" name="data_agendamento" id="data_agendamento" required min= "2022-11-23"/>

            <input type="time" id="appt" name="appt" min="09:00" max="18:00" required />
            <br></br>
            <br></br>
            
            <button id='submit' name='submite'>Agendar</button>

            </fieldset>
        </form>

      </div>
     
    </div>
    </div>

  )
};

export default Agendamento;