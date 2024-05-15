import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatPage from "./pages/ChatPage.jsx";
import RootLayout from "./pages/Root.jsx";


const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path:'home',
        element: <HomePage/>
      },
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
