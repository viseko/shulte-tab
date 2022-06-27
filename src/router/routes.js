import React from 'react';
import { Navigate } from 'react-router-dom';

import Main from '../pages/Main';
import Info from '../pages/Info';
import Options from '../pages/Options';
import Results from '../pages/Results';

export const routes = [
  {path: "https://viseko.github.io/shulte-tab", element: <Main />},
  {path: "https://viseko.github.io/shulte-tab/*", element: <Navigate to="https://viseko.github.io/shulte-tab" />},
  {path: "https://viseko.github.io/shulte-tab/info", element: <Info />},
  {path: "https://viseko.github.io/shulte-tab/options", element: <Options />},
  {path: "https://viseko.github.io/shulte-tab/results", element: <Results />},
];