import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[[700px]">
      <Image src="https://res.cloudinary.com/dvloopr/image/upload/v1631821067/reception_7bbaa2a4ab.jpg" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <div className="m-auto w-1/4 rounded-lg pt-4 pb-3 bg-green-50">
          <p className="text-sm sm:text-lg">Going on a holidaze in Bergen?</p>
          <button className="text-gray-900 bg-red-400 px-6 py-2 shadow-md rounded-lg font-bold my-4 hover:shadow-xl hover:bg-green-300 active:scale-90 transition duration-150 hover:text-gray-600">yes, show me the cribs!</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
