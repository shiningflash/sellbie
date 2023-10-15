import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Product from "./pages/Product.tsx"
import Transaction from "./pages/Transaction.tsx"
import Profile from "./pages/Profile.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Product />
    ),
  },
  {
    path: "/transaction",
    element: (
        <Transaction />
    ),
  },

  //profile page with dynamic id parameter
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <App />
  </React.StrictMode>
)
