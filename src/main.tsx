import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

/*const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/estatistica-app",
        element: <Histogram />,
      },
      {
        path: "/estatistica-app/descriptive-form",
        element: <DescriptiveForm />,
      },
      {
        path: "/estatistica-app/numeric-form",
        element: <NumericForm />,
      },
      {
        path: "/estatistica-app/descriptive-mock",
        element: <MockDescriptivePage />,
      },
      {
        path: "/estatistica-app/numeric-mock",
        element: <MockPage />,
      },
      {
        path: "/estatistica-app/histogram-mock",
        element: <MockHistogram />,
      },
    ],
  },
]);*/

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);
