import './styles/App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from './pages/CreateEmployee';
import EmployeesList from './pages/EmployeesList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateEmployee />} />
        <Route path='/employees-list' element={<EmployeesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
