import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./styles.css"


import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'

import Home from './routes/home'
import New from './routes/new'
import Note from './routes/note'
import Edit from './routes/edit'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/new",
    element: <New />
  },
  {
    path: "/:id",
    element: <Note />
  },
  {
    path: "/:id/edit",
    element: <Edit />
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
