import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";

export default function App() {
  return (
    <div className="bg-background-200">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
