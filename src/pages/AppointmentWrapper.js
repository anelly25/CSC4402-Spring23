import React, {useState, useEffect} from 'react'
import { AppointmentForm } from './AppointmentsForm'
import './Appointments.css';
import { Appointment } from './Appointment';
import {v4 as uuidv4} from 'uuid';
import {EditAppointmentForm} from './EditAppointmentForm'
uuidv4();

export const AppointmentWrapper = () => {

    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        setAppointments(savedAppointments);
    }, []);
    

    const addAppointment = appointment => {
        const newAppointments = [...appointments, {id: uuidv4(), task: appointment, completed: false, isEditing: false}];
        setAppointments(newAppointments);
        localStorage.setItem('appointments', JSON.stringify(newAppointments));
    }

    const toggleComplete = id => {
        const newAppointments = (appointments.map(appointment => appointment.id === id ? {...
        appointment, completed: !appointment.completed} : appointment))
        setAppointments(newAppointments);
        localStorage.setItem('appointments', JSON.stringify(newAppointments));
    }

    const deleteAppointment = id => {
        const newAppointments = (appointments.filter(appointment => appointment.id !== id))
        setAppointments(newAppointments);
        localStorage.setItem('appointments', JSON.stringify(newAppointments));
    }

    const editAppointment = id => {
        setAppointments(appointments.map(appointment => appointment.id === id ? {...
        appointment, isEditing: !appointment.isEditing} : appointment))
    }

    const editTask = (task, id) => {
        const newAppointments = (appointments.map(appointment => appointment.id === id ? {...
        appointment, task, isEditing: !appointment.isEditing} : appointment))
        localStorage.setItem('appointments', JSON.stringify(newAppointments));
    }

    return (
        <div className='AppointmentWrapper'>
            <h1>Appointments</h1>
            <div className="list">
            <AppointmentForm addAppointment={addAppointment} />
            {appointments.map((appointment, index) => (
                appointment.isEditing ? (
                    <EditAppointmentForm  editAppointment = {editTask} task = {appointment}/>
                ) : (
                    <Appointment task = {appointment} key={index} 
                toggleComplete = {toggleComplete} deleteAppointment = 
                {deleteAppointment} editAppointment = {editAppointment}/>
                )
                
            ))}
            </div>
        </div>
    )
}