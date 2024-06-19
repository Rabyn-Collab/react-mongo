import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/Home';
import About from './features/About';
import RootLayout from './ui/RootLayout';
import NotFound from './ui/NotFound';
import Login from './features/auth/Login';
import SignUp from './features/auth/SignUp';
import UserRoutes from './ui/UserRoutes';


const movie = {
  name: 'avatar',
  actors: [

  ]
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        element: <UserRoutes />,
        children: [
          { path: 'login', element: <Login /> },
        ]
      },



      { path: 'signup', element: <SignUp /> },



      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ]
  },
]);
const App = () => {

  return <RouterProvider router={router} />
}

export default App