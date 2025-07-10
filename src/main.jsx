import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div class="footer">
      <a href="#Home" style="color:white; background-color:blue; width:fit-content; border-radius:10px;text-align:right;height:50px;margin-top:20px;">Go to Top</a>
    </div>
  </StrictMode>,
)
