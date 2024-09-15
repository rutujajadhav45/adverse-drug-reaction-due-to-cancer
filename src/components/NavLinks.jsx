import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavLinks = ({ className }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={className}>
      {/* //TODO: If i am on research page, about and work links should not be accessable from navlinks*/}

      {location.pathname !== "/research" && (
        <>
          <button
            onClick={() => scrollToSection("about")}
            className="py-2 text-gray-600 font-semibold text-lg hover:underline hover:decoration-blue-700 hover:text-blue-700 px-6 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="py-2 text-gray-600 font-semibold text-lg hover:underline hover:decoration-blue-700 hover:text-blue-700 px-6 cursor-pointer"
          >
            Work
          </button>
        </>
      )}
      {location.pathname !== "/research" && (
        <Link
          to="/research"
          className="py-2 text-gray-600 font-semibold text-lg hover:underline hover:decoration-blue-700 hover:text-blue-700 px-6"
        >
          Research
        </Link>
      )}
      <button
        onClick={() => scrollToSection("contact")}
        className="py-2 text-white font-semibold text-lg bg-blue-700 rounded-xl px-4 mx-0 sm:mx-6"
      >
        Contact
      </button>
    </div>
  );
};

export default NavLinks;
