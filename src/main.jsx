import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './component/AddCoffee';
import UpdateCoffee from './component/UpdateCoffee';
import App from './App';
import './index.css'
import Users from './component/Users';
import Login from './component/Login';
import Register from './component/Register';
import AuthProvider from './component/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('https://coffee-server-teal-two.vercel.app/coffee')
  },
  {
    path : '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`https://coffee-server-teal-two.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/users',
    element:<Users></Users>,
    loader:()=>fetch('https://coffee-server-teal-two.vercel.app/coffee/users')
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
