import React from 'react';
import { Navigate } from 'react-router-dom';

import Main from '../pages/Main';
import Info from '../pages/Info';
import Options from '../pages/Options';
import Results from '../pages/Results';

export const routes = [
  {path: "/", element: <Main />},
  {path: "*", element: <Navigate to="/"/>},
  {path: "info", element: <Info />},
  {path: "options", element: <Options />},
  {path: "results", element: <Results />},
];