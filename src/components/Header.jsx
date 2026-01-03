import { NavLink } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { path: "/", label: "Home" },
    { path: "/posts", label: "Posts" },
    { path: "/about", label: "About" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Coding<span className="text-blue-400">Chronicles</span>
        </h1>
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
        <nav className="hidden md:flex items-center space-x-10">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`
              }>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-3 py-4 text-center bg-gray-900">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`
              }>
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
