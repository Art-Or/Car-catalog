import React from 'react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Router from "./components/Router"
import AuthProvider from './providers/AuthProvider'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
