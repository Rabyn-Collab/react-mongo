import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/Home';
import About from './features/About';
import RootLayout from './ui/RootLayout';
import NotFound from './ui/NotFound';
import DetailPage from './features/DetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'product/:id', element: <DetailPage /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ]
  },
]);
const App = () => {

  return <RouterProvider router={router} />
}

export default App