import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";

export default function App() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500 selection:bg-primary-500/20 selection:text-primary-600 dark:selection:text-primary-400">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
