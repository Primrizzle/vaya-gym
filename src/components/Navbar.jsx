// src/components/Navbar.jsx
import React, { useState } from "react";

export default function Navbar() {
  // State to track which top-level menu item is active
  const [activeItem, setActiveItem] = useState("Home");

  // Utility function to conditionally style a menu item
  function getLinkClasses(itemName) {
    const base =
      "text-white hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 px-2 transition";
    return itemName === activeItem
      ? `${base} text-yellow-400 border-b-2 border-yellow-400`
      : base;
  }

  return (
    <div className="navbar bg-black shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="#">
          Vyayamshala
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* Home */}
          <li>
            <a
              href="#"
              className={getLinkClasses("Home")}
              onClick={() => setActiveItem("Home")}
            >
              Home
            </a>
          </li>

          {/* About */}
          <li>
            <a
              href="#"
              className={getLinkClasses("About")}
              onClick={() => setActiveItem("About")}
            >
              About
            </a>
          </li>

          {/* Reviews */}
          <li>
            <a
              href="#"
              className={getLinkClasses("Reviews")}
              onClick={() => setActiveItem("Reviews")}
            >
              Reviews
            </a>
          </li>

          {/* Services (dropdown) */}
          <li>
            <details>
              <summary
                className={getLinkClasses("Services")}
                onClick={() => setActiveItem("Services")}
              >
                Services
              </summary>
              <ul className="bg-black rounded-t-none p-2">
                <li>
                  <a href="#">Private Sessions</a>
                </li>
                <li>
                  <a href="#">Membership</a>
                </li>
              </ul>
            </details>
          </li>

          {/* Contact */}
          <li>
            <a
              href="#"
              className={getLinkClasses("Contact")}
              onClick={() => setActiveItem("Contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
