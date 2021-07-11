import React from "react";
import Link from "next/link";
import PagesDropdown from "../Dropdowns/PagesDropdown";



export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className=" top-0 fixed bg-blue-300 z-50 w-full flex  flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between sm:w-auto md:w-auto lg:w-auto lg:static lg:block lg:justify-start">
            
              <a
                className="text-black text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href="/"
              >
                Bonga
              </a>
          
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-black lg:hover:text-white text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/Developers/Home"
                >
                  <i className="lg:text-black text-black far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Developers Documentation
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <PagesDropdown />
              </li>
              <li className="flex items-center">
                <a className="lg:text-black lg:hover:text-white text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/about"
                 > 
                 About
                </a>
              </li>
              <li className="flex items-center">
                <a className="lg:text-black lg:hover:text-white text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/Pricing"
                 > 
                 Pricing
                </a>
              </li>
              <li className="flex items-center">
                <a className="lg:text-black lg:hover:text-white text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/Blog/Index"
                 > 
                 Blog
                </a>
              </li>
              <li className="flex items-center">
                <a className="lg:text-black lg:hover:text-white text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/Developers/Home"
                 > 
                 Developers
                </a>
              </li>

              
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-800 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/"
                  target="_blank"
                >
                  <i className="lg:text-white-300  text-blue-600 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweets</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-800 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/"
                  target="_blank"
                >
                  <i className="lg:text-white-300  text-black fab fa-telegram text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweets</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-800 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/"
                  target="_blank"
                >
                  <i className="lg:text-white-300  text-red-500 fab fa-reddit text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweets</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/"
                  target="_blank"
                >
                  <i className="lg:text-red-500 text-red-500 fab fa-youtube text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Youtube</span>
                </a>
              </li>
             <Link href="/auth/login" >
              <li className="flex items-center">
                <button
                  className="bg-gray-400 text-blue-600 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   Login
                </button>
              </li>
              </Link>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}