import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
    
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs";
import Challenges from "./pages/Challenges";
import Inspiration from "./pages/Inspiration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/challenges" element={<Challenges/>} />
      <Route path="/inspiration" element={<Inspiration/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
