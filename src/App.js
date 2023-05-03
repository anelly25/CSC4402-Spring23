
import './App.css';
import Navbar from "./Navbar"
import Login from "./pages/Login"
import Appointments from "./pages/Appointments"
import Messages from "./pages/Messages"
import Profile from "./pages/Profile"
import Users from "./pages/Users"
import React from 'react';
import Home from './pages/Home';

document.body.style.background = '#461d7c';

function App() {

    let component
    switch (window.location.pathname){
        case"/":
        component = <Home />
        break
        case "/Appointments":
        component = <Appointments />
        break
        case "/Messages":
        component = <Messages />
        break
        case "/Login":
        component = <Login />
        break
        case "/Users":
        component = <Users />
        break
        case "/Profile":
        component = <Profile />
        break
    }
    return (
        <>
        <Navbar />
        <div className = "App">
            {component}
        </div>
        </>

  );
}

export default App;
