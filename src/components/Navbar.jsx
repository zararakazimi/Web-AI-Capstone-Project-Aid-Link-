import { Link } from "react-router-dom";
import logo from "../assets/newlogo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-900 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AidLink Logo"
            className="h-20 w-20 object-contain"
          />
         
        </Link>


        {/* Navigation */}
        <div className="flex items-center gap-5 text-sm font-medium">

          <Link 
            to="/"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/organizations"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Organizations
          </Link>

          <Link
            to="/request-help"
            className="text-white hover:hover:text-blue-200 transition duration-300"
          >
            Request Help
          </Link>

          <Link
            to="/saved"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Saved
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;