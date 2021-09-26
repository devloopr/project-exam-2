import Image from "next/image";
import { useRouter } from "next/router";

function Banner() {
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
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[[700px]">
        <Image src="https://res.cloudinary.com/dvloopr/image/upload/v1631821067/reception_7bbaa2a4ab.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-[40%] left-[20%]">
        <h3 className="mb-3 p-2 bg-indigo-100   rounded-lg sm:w-7/12 font-mono shadow-xl text-gray-900 text-xl sm:text-1xl md:text-2xl xl:text-3xl">NEED A PLACE TO STAY IN BERGEN?</h3>
        <button onClick={search} className="text-gray-900 bg-red-400 px-6 py-2 shadow-md rounded-lg font-bold my-4 hover:shadow-xl hover:bg-green-300 active:scale-90 transition duration-150 hover:text-gray-600">
          SEARCH
        </button>
      </div>
    </>
  );
}

export default Banner;
