import React, {useState} from 'react'
import './Appointments.css';

export const AppointmentForm = ({addAppointment}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        
        addAppointment(value);

        setValue("")
    }

    return (
        <form className='AppointmentForm' onSubmit={handleSubmit}>
            <input type="text" className='appointment-input' value = {value}
            placeholder="Appointment Information" onChange = 
            {(e) => setValue(e.target.value)}/>
            <button type='submit' className="appointment-btn">Add Appointment
            </button>
        </form>
    )
}