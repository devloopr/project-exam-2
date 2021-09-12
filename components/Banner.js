import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[[700px]">
      <Image src="https://i.ibb.co/BKT69XF/2006-generated.jpg" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Going on a holidaze in Bergen?</p>
        <button className="text-gray-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-4 hover:shadow-xl hover:bg-green-100 active:scale-90 transition duration-150">yes, show me the cribs!</button>
      </div>
    </div>
  );
}

export default Banner;
