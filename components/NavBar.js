import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export const NavBar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: "",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        noOfGuests: 1,
      },
    });
  };

  return (
    <>
      <nav className="flex font-Courier New items-center flex-wrap bg-green-100 p-2 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 "></a>
        </Link>
        <button onClick={handleClick} className=" inline-flex p-3 hover:bg-indigo-100 rounded lg:hidden text-gray-600 ml-auto hover:text-gray-600 outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`${active ? "" : "hidden"}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <a className={`${router.pathname == "/" ? "bg-indigo-100 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-semibold items-center justify-center hover:bg-indigo-100 hover:text-red-500 " : "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-semibold items-center justify-center hover:bg-indigo-100 hover:text-red-500 "}`}>
              <Link href="/">HOME </Link>
            </a>

            <a
              onClick={search}
              className={`${router.pathname == "/search" ? "bg-indigo-100 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 cursor-pointer font-semibold items-center justify-center hover:bg-indigo-100 hover:text-red-500 " : "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-semibold items-center justify-center hover:bg-indigo-100 hover:text-red-500 "}`}>
              HOTELS
            </a>

            <Link href="/contact">
              <a className={`${router.pathname == "/contact" ? "bg-indigo-100 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-semibold items-center justify-center hover:bg-indigo-100 hover:text-red-500 " : "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-semibold items-center justify-center hover:bg-red-100 hover:text-red-500 "}`}> CONTACT</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
