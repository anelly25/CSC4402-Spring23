import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoadTablePage from "./pages/LoadTablePage";

function App() {
  return (
    <>
      <div className="pa ge">
        <Router>
          <Routes>
            <Route index element={<Home />} />\
            <Route path="/LoadBoard" element={<LoadTablePage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
