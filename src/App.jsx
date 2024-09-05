import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Gender from './pages/Gender';
import Workout  from './pages/workout';
import Weight from './pages/weight';
import DOB from './pages/DOB';
import Aim from './pages/Aim';
import Wanted from './pages/wanted';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/workout" element={<Workout />} /> 
        <Route path="/weight" element={<Weight />} /> 
        <Route path="/DOB" element={<DOB />} /> 
        <Route path="/wanted" element={<Wanted />} /> 
        <Route path="/Aim" element={<Aim/>} /> 
       
       
      </Routes>
    </Router>
  );
}

export default App;