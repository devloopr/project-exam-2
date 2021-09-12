import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="flex sticky top-0 z-50 bg-green-100 shadow-md py-5 px-5 md:px-10">
      <div className="w-1/3 relative flex items-center h-10 cursor-pointer my-auto">
        <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
      </div>

      <div className="invisible sm:visible w-1/3 flex items-center border-2 border-gray-600 rounded-full py-2 md:shadow-sm">
        <input className="hidden sm:inline flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-600" type="text" placeholder="Start your search" />
        <SearchIcon className="hidden sm:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer sm:mx-2" />
      </div>

      <div className="w-1/3 flex justify-end items-center space-x-4 text-red-400 ">
        <HeartIcon className="animate-beat h-6 cursor-pointer" />
        <UserIcon className="h-6 cursor-pointer" />
        <MenuIcon className="h-6 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
