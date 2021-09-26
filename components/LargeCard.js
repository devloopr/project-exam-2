import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-28  cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
      <div className="absolute top-52 left-12">
        <h3 className="text-4xl mb-3 w-64 font-mono">{title}</h3>
        <p>{description}</p>
        <button className="text-gray-900 bg-red-400 px-6 py-2 shadow-md rounded-lg font-bold my-4 hover:shadow-xl hover:bg-green-300 active:scale-90 transition duration-150 hover:text-gray-600">{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
