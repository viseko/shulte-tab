import React from 'react';
import AppRouter from "./router/AppRouter";

import {OptionsContext} from "./context/index"
import useOptions from './hooks/useOptions';

import './App.css';

function App() {
  const [options, setOptions] = useOptions();

  return (
      <div className="App">
        <OptionsContext.Provider value={{options, setOptions}}>
          <AppRouter />
        </OptionsContext.Provider>
      </div>
  );
}

export default App;
