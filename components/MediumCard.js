import Image from "next/image";

function MediumCard({ img, title, imgUrl }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out mb-4">
      <div className="relative h-60 w-80">
        <Image src={img ? img : imgUrl} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="font-serif text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
