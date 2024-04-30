import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Pages/Login.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HelloWorld from './FunElement/HelloWorld.jsx'
import Signup from './Components/Signup/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: '/',
      element:  <Home/>
    },{
      path: '/login',
      element: <Login/>
    },{
      path:"helloworld",
      element: <HelloWorld/>
    },{
      path: '/signup',
      element: <Signup/>

    }]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
