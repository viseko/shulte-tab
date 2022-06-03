import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Info from './pages/Info';
import {OptionsContext} from "./context/index"
import Options from './pages/Options';
import Results from './pages/Results';
import optionsDefault from './config/options';
import './App.css';

function App() {
  // На данном этапе разработки сразу достаём опции по умолчанию
  const [options, setOptions] = useState({...optionsDefault});

  return (
      <div className="App">
        <OptionsContext.Provider value={{options, setOptions}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="info" element={<Info />} />
              <Route path="options" element={<Options />}/>
              <Route path="results" element={<Results />}/>
            </Routes>
          </BrowserRouter>
        </OptionsContext.Provider>
      </div>
  );
}

export default App;
