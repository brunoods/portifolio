import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx' // 1. Importe

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. Envelope o App com o ThemeProvider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)