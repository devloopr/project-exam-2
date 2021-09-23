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
    <div className="overflow-hidden bg-green-100">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>holidaZe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 bg-green-100">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 pt-12">explore Bergen city</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmCard key={item.id} img={item.img[0].url} distance={item.distance} location={item.location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8 pt-16 "> Check out this week's best deals!</h2>

          <div className="flex space-x-3 overflow-scroll pt-4 scrollbar-hide">
            {cardData?.map((item) => (
              <MediumCard key={item.id} img={item.img[0].url} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard img="https://res.cloudinary.com/dvloopr/image/upload/v1631716661/bang_0aba0a1c34.jpg" title="Want a pool and spa with your stay?" description="Or a cozy bed and breakfast?" buttonText="Get Inspired" />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:1337/smallcards").then((res) => res.json());

  const cardData = await fetch("http://localhost:1337/smallcards").then((res) => res.json());

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
