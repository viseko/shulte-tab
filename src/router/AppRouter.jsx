import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from './routes';

const AppRouter = () => {
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        {
          routes.map(route =>
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />)
        }
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;