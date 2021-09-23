import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-green-100 p-2 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 "></a>
        </Link>
        <button onClick={handleClick} className=" inline-flex p-3 hover:bg-red-400 rounded lg:hidden text-gray-600 ml-auto hover:text-gray-600 outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`${active ? "" : "hidden"}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:bg-red-400 hover:text-white ">Home</a>
            </Link>
            <Link href="/login">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600  font-bold items-center justify-center hover:bg-red-400 hover:text-white">Services</a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600  font-bold items-center justify-center hover:bg-red-400 hover:text-white">About us</a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600  font-bold items-center justify-center hover:bg-red-400 hover:text-white">Contact us</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};