import { Outlet } from "react-router-dom";
import Header from "./component/header";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
