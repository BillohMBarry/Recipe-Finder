import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import "./server.js"
// import { makeServer } from './server.js'

// if(process.env.NODE_ENV === "development") {
//   makeServer({environment: "development"})
// }
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>,
  </BrowserRouter>

)
