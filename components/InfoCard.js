import Image from "next/image";
import Link from "next/link";

import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ id, img, location, title, description, star, price, total, imgUrl, showEditButton, onEdit }) {
  const editHotel = () => {
    console.log("selected hotel==>>", id);
    onEdit(id);
  };

  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t border-red-400">
      <Link href={`/details/${id}`}>
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          <Image src={img ? img : imgUrl} layout="fill" objectFit="cover" className="rounded-2xl" />
        </div>
      </Link>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-600 flex-grow">{description}</p>

        <div>
          {showEditButton && (
            <button className="text-gray-900 bg-red-400 px-6 py-2 shadow-md rounded-lg font-bold my-4 hover:shadow-xl hover:bg-green-300 active:scale-90 transition duration-150 hover:text-gray-600" onClick={editHotel}>
              Edit - go to form
            </button>
          )}
        </div>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
