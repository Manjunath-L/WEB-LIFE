import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 border-2 border-gray-200 px-2">
        <div className="leftnav">
          <ul className="flex gap-5 items-center">
            <li className="font-bold text-4xl">WIX</li>
            <span className="flex items-center">
              <li className="text-1xl font-semibold">Product</li>
              <i class="fa-solid fa-angle-down"></i>
            </span>
            <span className="flex items-center">
              <li className="text-1xl font-semibold">Solution</li>
              <i class="fa-solid fa-angle-down"></i>
            </span>
            <span className="flex items-center">
              <li className="text-1xl font-semibold">Resource</li>
              <i class="fa-solid fa-angle-down"></i>
            </span>

            <li className="text-1xl font-semibold">Wixel</li>
            <li className="text-1xl font-semibold">Wixestd</li>
            <li className="text-1xl font-semibold">Entp</li>
          </ul>
        </div>
        <div className="rightnav">
          <ul className="flex gap-5">
            <li>logo</li>
            <li>login</li>
            <li>Get Started</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
