import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmCard from "../components/SmCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";

export default function Home({ exploreData, cardData }) {
  return (
    <>
      <div className=" bg-green-50">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>holidaZe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Header />

        <Banner />

        <main className="max-w-7xl mx-auto px-8 sm:px-16 bg-green-50 font-serif">
          <section className="pt-20 pb-20">
            <div className="w-full">
              <h2 className="text-xl sm:text-1xl md:text-2xl xl:text-3xl w-[260px] pl-4 sm:w-[260px] md:w-[290px] xl:w-[300px] mb-3 p-2 bg-indigo-100 bg rounded-lg font-mono shadow-xl text-gray-900">EXPLORE BERGEN</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map((item) => (
                <SmCard key={item.id} img={item.img[0] ? item.img[0].url : "https://res.cloudinary.com/dvloopr/image/upload/v1631716661/bang_0aba0a1c34.jpg"} distance={item.distance} location={item.location} />
              ))}
            </div>
          </section>

          <section className="pt-6">
            <h2 className="text-xl sm:text-1xl md:text-2xl xl:text-3xl w-[220px] pl-4 sm:w-[230px] md:w-[250px] xl:w-[260px] mb-3 p-2 bg-indigo-100 bg rounded-lg font-mono shadow-xl text-gray-900">BEST DEALS</h2>

            <div className="flex space-x-3 overflow-scroll pt-4 scrollbar-hide">
              {cardData?.map((item) => (
                <MediumCard key={item.id} img={item.img[0] ? item.img[0].url : "https://res.cloudinary.com/dvloopr/image/upload/v1631716661/bang_0aba0a1c34.jpg"} title={item.title} />
              ))}
            </div>
          </section>
          <LargeCard img="https://res.cloudinary.com/dvloopr/image/upload/v1631716661/bang_0aba0a1c34.jpg" title="NEED A POOL WITH YOUR STAY?" description="Or a cozy bed and breakfast?" buttonText="Get Inspired" />
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:1337/smallcards").then((res) => res.json());

  const cardData = await fetch("http://localhost:1337/hotels").then((res) => res.json());

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
