import Image from "next/image";
import Link from "next/link";

function MediumCard({ id, img, title, imgUrl }) {
  console.log(id);
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out mb-4">
      <Link href={`/details/${id}`}>
        <div className="relative h-60 w-80">
          <Image src={img ? img : imgUrl} layout="fill" className="rounded-xl" />
        </div>
      </Link>
      <h3 className="font-serif text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
