import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <main className=" min-h-svh flex flex-col">
      <NavBar />
      <div className="flex-1 mt-20">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
