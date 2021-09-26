import Image from "next/image";

function SmCard({ img, location, distance }) {
  return (
    <div className="flex pl-10 items-center mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-green-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-14 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div className="">
        <h2>{location}</h2>
        <h3 className="text-gray-600">{distance} </h3>
      </div>
    </div>
  );
}

export default SmCard;
