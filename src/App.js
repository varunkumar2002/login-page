import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/login" element={<Login />} />
          
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;

