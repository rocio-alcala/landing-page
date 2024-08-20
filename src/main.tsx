import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./views/RootLayout.tsx";
import Home from "./views/Home.tsx";
import Products from "./views/Products.tsx";
import Contact from "./views/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/products", element: <Products></Products> },
      { path: "/contact", element: <Contact></Contact> }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
