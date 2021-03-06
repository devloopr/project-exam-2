import Image from "next/image";
import { SearchIcon, UserIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="grid grid-cols-3 sticky top-0 z-50 bg-green-100 shadow-md py-5 px-5 md:px-10">
      <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image src="https://res.cloudinary.com/dvloopr/image/upload/v1632609859/alphalogo_1e5289d478.png" layout="fill" objectFit="contain" objectPosition="left" />
      </div>

      <div className="invisible sm:visible flex items-center border-2 border-gray-600 rounded-full py-2 md:shadow-sm">
        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="hidden sm:inline flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-600" type="text" placeholder={placeholder || "type something"} />
        <SearchIcon onClick={search} className="hidden sm:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer sm:mx-2" />
      </div>

      <div className="flex justify-end items-center space-x-4 text-red-400 ">
        <HeartIcon className="animate-beat h-6" />
        <UserIcon onClick={() => router.push("/login")} className="h-6 cursor-pointer" />
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto pt-5">
          <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={["#f4595f"]} onChange={handleSelect} />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of guests</h2>
            <UserIcon className="h-5 pr-2" />
            <input value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} type="number" min={1} className="w-12 pl-2 text-lg outline-none text-red-400" />
          </div>
          <div className="flex pt-4 pb-1 justify-center align-center space-x-8">
            <button onClick={resetInput} className="text-sm text-gray-900 bg-red-400 px-4 py-2 rounded-lg  shadow-md hover:shadow-xl hover:bg-green-50 active:scale-90 transition duration-150 hover:text-gray-600">
              CANCEL
            </button>
            <button onClick={search} className="text-sm text-gray-900 bg-red-400 px-4 py-2 rounded-lg  shadow-md hover:shadow-xl hover:bg-green-50 active:scale-90 transition duration-150 hover:text-gray-600">
              SEARCH
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
