import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../../Layout'
import Home from '../Components/Home/Home'
import Github from '../Components/GitHubProfile/Github'
import Login from '../Components/Login/Login'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
    <Route path='' element={<Home />} />
    <Route path='/github/:id' element={<Github/>} />
    <Route path='/login' element={<Login/>} />
  </Route >
  )
)






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
