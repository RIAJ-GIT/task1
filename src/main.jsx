import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PasswordToggle from './PasswordToggle.jsx'
import Login from './Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const routes = createBrowserRouter([{
  path:'/',
  element:<App/>},
  {path:'pass',
element:<PasswordToggle/>
},
{path:'log',
element:<Login/>}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
