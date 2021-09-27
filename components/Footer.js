import { LocationMarkerIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

function Footer() {
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
    <div className="grid pt-8 grid-cols-1 place-items-center md:grid-cols-3 md:px-32 gap-32 bg-green-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800 mt-2">
        <Link href="/">
          <h5 className="cursor-pointer hover:text-red-400 font-bold">HOME</h5>
        </Link>
        <Link href="/contact">
          <p className="cursor-pointer hover:text-red-400 ">CONTACT</p>
        </Link>

        <p onClick={search} className="cursor-pointer hover:text-red-400">
          HOTELS
        </p>

        <Link href="/login">
          <p className="cursor-pointer hover:text-red-400">ADMIN</p>
        </Link>
      </div>
      <div>
        <div className="flex flex-col">
          <h4 className="font-bold pb-8">Contact information</h4>

          <div className="flex">
            <PhoneIcon className="w-8" />
            <span className="text-sm font-normal pl-4">+47 98404040</span>
          </div>
          <div className="flex">
            <MailIcon className="w-8" />
            <span className="text-sm font-normal pl-4">info@holidaze.com</span>
          </div>
          <div className="flex">
            <LocationMarkerIcon className="w-8" />
            <span className="text-sm font-normal pl-4">Torget 12, 5050 Bergen</span>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center h-full w-full cursor-pointer w-100 my-auto">
        <Link href="/">
          <Image src="https://res.cloudinary.com/dvloopr/image/upload/v1632609859/alphalogo_1e5289d478.png" layout="fill" objectFit="contain" objectPosition="left" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
