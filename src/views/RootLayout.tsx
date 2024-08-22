import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout() {


  return (
    <main className=" min-h-svh flex flex-col bg-[#0e100f]">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}
