import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { HubProvider } from './components/providers/HubContext.jsx';
import { TechProvider } from './components/providers/TechContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HubProvider>
        <TechProvider>
          <App />
        </TechProvider>
      </HubProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
