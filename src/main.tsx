import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { DescriptiveForm } from './pages/DescriptiveForm/index';
import { MockDescriptivePage } from './pages/MockDescriptivePage/index.tsx';
import { MockPage } from './pages/MockPage/index.tsx';
import { NumericForm } from './pages/NumericForm/index.tsx';

const router = createBrowserRouter([
  {
    path: "/estatistica-app",
    element: <App />,
    children: [
      {
        path: "/",
        element: <NumericForm />,
      },
      {
        path: "/descriptive-form",
        element: <DescriptiveForm />,
      },
      {
        path: "descriptive-mock",
        element: <MockDescriptivePage />,
      },
      {
        path: "/numeric-mock",
        element: <MockPage />,
      }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
