import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginFom';
import CarrierPage from './components/HomePage';
import AvailableLoads from './components/AvailableLoads';
import { LoadsProvider } from './components/LoadsContext';
import ProfilePage from './components/profile';
function App() {
  return (
    <Router>
       <LoadsProvider>
      <div className="App">
        <Routes>
           <Route path = "/profile" element = {<ProfilePage/>} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<CarrierPage />} />
          <Route path="/available-loads" element={<AvailableLoads />} />
        </Routes>
      </div>
     </LoadsProvider>
    </Router>
  );
}

export default App;
