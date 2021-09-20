import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

const errorPage = () => {
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 3000);
  }, []);
  return (
    <div className="w-100 h-50 flex">
      <Image classname="" src="https://res.cloudinary.com/dvloopr/image/upload/v1631827905/404_ced983ce99.jpg" layout="fill" objectFit="cover" />
      <h1 className="absolute top-1/2 w-full text-right text-semibold">Ooooooops! Follow the circles back home! :D</h1>
    </div>
  );
};

export default errorPage;
