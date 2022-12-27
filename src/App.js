import React from 'react';
import { RouterProvider } from "react-router-dom";
import { Router } from './Routes/Router/Router';

function App() {
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
