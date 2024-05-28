import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContainer from '@/App.tsx'
import '@/assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
)
