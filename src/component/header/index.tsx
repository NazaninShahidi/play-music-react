import { MusicLogo } from "../ui/svg";
import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";

function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 shadow-lg bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <MusicLogo />
        </Link>
        <Navbar />
      </div>
    </nav>
  );
}

export default Header;
