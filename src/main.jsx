import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import router from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProviders/AuthProvider.jsx'
//import {QueryClient, QueryClientProvider}from '@tanstack/react-query'
//const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
