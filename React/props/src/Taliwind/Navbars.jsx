import React from "react";
import reactLogo from "../assets/react.svg";

const Navbars = () => {
  return (
    <>
      <div className="flex min-h-24 flex-wrap items-center justify-between gap-4 border-b border-sky-100 border-bs-indigo-100 px-6 py-4">
        <div className="text-3xl font-bold text-sky-600">
          <h3>Startup 3</h3>
        </div>
        <div>
          <ul className="flex flex-wrap gap-5 text-lg font-medium text-sky-600 ">
            <li>Home</li>
            <li>Features</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="rounded-md bg-white px-4 py-2 font-medium text-sky-600 hover:bg-sky-50">
            Sign In
          </button>
          <button className="rounded-md bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700">
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex min-h-24 flex-wrap items-center justify-between gap-4 bg-slate-900 px-6 py-4 mt-3">
        <div className="text-3xl font-bold text-white">
          <h3>Startup 3</h3>
        </div>
        <div>
          <ul className="flex flex-wrap gap-6 text-lg font-medium text-white lg:gap-12">
            <li>Tour</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>
              <i className="fa-brands fa-google-plus-g"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-cyan-50 px-6 py-20 h-135">
        <div className="mx-auto flex max-w-5xl  items-center gap-10 text-center">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 md:text-6xl">
              Learn React Easily
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Build simple, fast, and beautiful user interfaces with components.
            </p>
            <button className="mt-8 rounded-md bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700">
              Start Now
            </button>
          </div>

          <img
            src={reactLogo}
            alt="React logo"
            className="h-40 w-40 animate-spin [animation-duration:3s] drop-shadow-xl md:h-64 md:w-64 delay-75"
          />
        </div>
      </div>
    </>
  );
};

export default Navbars;
