import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Product from "./pages/Product.tsx"
import Transaction from "./pages/Transaction.tsx"
import Profile from "./pages/Profile.tsx"
import ProtectedRoutes from './components/ProtectedRoutes.tsx'
import { ApolloProvider } from "@apollo/client"
import { client } from "./utils/apolloClient"


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Product />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/transaction",
    element: (
      <ProtectedRoutes>
        <Transaction />
      </ProtectedRoutes>
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
    <ApolloProvider client={client}>
      <RouterProvider router={router} />

      <App />
    </ApolloProvider>
  </React.StrictMode>
)
