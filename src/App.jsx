import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";

export default function App() {
  return (
    <div className="bg-background-50 dark:bg-background-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
