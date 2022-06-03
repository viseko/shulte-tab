import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Info from './pages/Info';
import Options from './pages/Options';
import Results from './pages/Results';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="info" element={<Info />} />
          <Route path="options" element={<Options />}/>
          <Route path="results" element={<Results />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
