
import { Outlet } from "react-router-dom";
import { NavbarSimple } from "../components/Navbar";

function Layout() {
  return (
    <div>
      <NavbarSimple />
      <Outlet />
    </div>
  );
}

export default Layout;
