import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./styles.css"


import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from './routes/home'
import New from './routes/new'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/new",
    element: <New />
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
