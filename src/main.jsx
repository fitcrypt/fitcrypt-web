import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
    
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
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/challenges" element={<Challenges/>} />
      <Route path="/inspiration" element={<Inspiration/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/privacy-policy" element={<Privacy/>} />
      <Route path="/terms-of-service" element={<TermsOfService/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
