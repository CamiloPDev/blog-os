import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home';
import Cut1 from './pages/cuts/cut1/Cut1';
import Cut2 from './pages/cuts/cut2/Cut2';
import Cut3 from './pages/cuts/cut3/Cut3';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/blog-os',
    element: <Home/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/blog-os/cut-1',
    element: <Cut1/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/blog-os/cut-2',
    element: <Cut2/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/blog-os/cut-3',
    element: <Cut3/>,
    errorElement: <NotFoundPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)