import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatPreview from "./pages/ChatPreview.jsx";
import ChatPage from "./pages/ChatPage.jsx";


const router = createHashRouter([
  {
    path: '/',
    element: <HomePage/>,
    children:[
      {
        path:'chat',
        element: <ChatPage/>
      }
    ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
