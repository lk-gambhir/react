import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactelement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target : "_blank"
  },
  'click me' //text to be inserted
)
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <>
    {reactelement}
    <App />
    </>
  
  
  </StrictMode>,
)
