import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <main>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <footer></footer>
    </main>
  );
}
