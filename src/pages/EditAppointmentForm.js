import React, {useState} from 'react'
import './Appointments.css';

export const EditAppointmentForm = ({editAppointment, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        
        editAppointment(value, task.id);

        setValue("")
    }

    return (
        <form className='AppointmentForm' onSubmit={handleSubmit}>
            <input type="text" className='appointment-input' value = {value}
            placeholder="Update Appointment" onChange = 
            {(e) => setValue(e.target.value)}/>
            <button type='submit' className="appointment-btn">Update Appointment
            </button>
        </form>
    )
}