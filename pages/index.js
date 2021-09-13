import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmCard from "../components/SmCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";


export default function Home({ exploreData, cardData }) {
  return (
    <div className="overflow-hidden bg-green-100">
      <Head>
        <title>holidaZe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
{/* 
      <main className="max-w-7xl mx-auto px-8 sm:px-16 bg-green-100">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 pt-12">explore Bergen city</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmCard key={img} img={img} distance={distance} location={location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8 pt-16 "> Check out this week's best deals!</h2>

          <div className="flex space-x-3 overflow-scroll pt-4 scrollbar-hide">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard img="https://i.ibb.co/xCWmszS/2006-generated.jpg" title="poolparty" description="or a nice mountain trip? Bergen has it All!" buttonText="Get Inspired" />
      </main> */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) => res.json());

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}


