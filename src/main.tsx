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
import { Histogram } from './pages/Histogram/index.tsx';
import { MockHistogram } from './pages/MockHistogram/index.tsx';

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
