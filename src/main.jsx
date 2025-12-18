import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { HelmetProvider } from 'react-helmet-async';
    
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PageLoader from "./component/PageLoader";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Challenges = lazy(() => import("./pages/Challenges"));
const Inspiration = lazy(() => import("./pages/Inspiration"));
const Blog = lazy(() => import("./pages/Blog"));
const Privacy = lazy(() => import("./pages/Privacy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
      <Route path="/about-us" element={<Suspense fallback={<PageLoader />}><AboutUs /></Suspense>} />
      <Route path="/challenges" element={<Suspense fallback={<PageLoader />}><Challenges /></Suspense>} />
      <Route path="/inspiration" element={<Suspense fallback={<PageLoader />}><Inspiration /></Suspense>} />
      <Route path="/blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
      <Route path="/privacy-policy" element={<Suspense fallback={<PageLoader />}><Privacy /></Suspense>} />
      <Route path="/terms-of-service" element={<Suspense fallback={<PageLoader />}><TermsOfService /></Suspense>} />
      <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
