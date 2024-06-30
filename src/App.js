import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/home/Home';
import About from './features/About';
import RootLayout from './ui/RootLayout';
import NotFound from './ui/NotFound';
import Login from './features/auth/Login';
import SignUp from './features/auth/SignUp';
import UserRoutes from './ui/UserRoutes';
import Detail from './features/home/Detail';
import AdminProducts from './features/admin/ProductAdmin';
import ProductForm from './features/admin/ProductForm';

import ProductEdit from './features/admin/ProductEdit/ProductEdit';
import CartPage from './features/carts/CartPage';
import UserProfile from './features/user/UserProfile';
import AdminRoutes from './ui/AdminRoutes';
import UserSecRoutes from './ui/UserSecRoutes';



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'product/:id', element: <Detail /> },

      {
        element: <UserRoutes />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'signup', element: <SignUp /> },
        ]
      },


      {
        element: <AdminRoutes />,
        children: [
          { path: 'allProducts', element: <AdminProducts /> },
          { path: 'add-product', element: <ProductForm /> },
          { path: 'edit-product/:id', element: <ProductEdit /> },
        ]
      },



      {
        element: <UserSecRoutes />,
        children: [
          { path: 'carts', element: <CartPage /> },
          { path: 'userProfile', element: <UserProfile /> },
        ]
      },




      { path: 'about', element: <About /> },


      { path: '*', element: <NotFound /> },
    ]
  },
]);
const App = () => {




  return <RouterProvider router={router} />
}

export default App