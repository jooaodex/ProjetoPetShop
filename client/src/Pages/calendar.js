import { render } from '@testing-library/react';
import Calendar from 'react-calendar';
import { useState } from "react";
//import 'react-calendar/dist/Calendar.css';

function Calendar() {

const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );

}
  
  export default Calendar;