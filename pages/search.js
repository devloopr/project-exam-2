import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { NavBar } from "../components/NavBar";

function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  console.log(startDate);

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <>
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>holidaZe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Header placeholder={`Welcome to the login!`} />

        <main className="flex bg-green-50">
          <section className="flex-grow pt-14 px-6">
            <p className="">
              300+ stays - {range} - for {noOfGuests} guests
            </p>
            <h1 className="text-xl sm:text-1xl md:text-2xl xl:text-3xl w-[260px] pl-4 sm:w-[260px] md:w-[290px] xl:w-[300px] p-2 bg-indigo-100 bg rounded-lg font-mono shadow-xl text-gray-900 mt-2 mb-4">Stays in {location}:</h1>

            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-green-50 transition transform duration-100 ease-out">Cancellation Flex</p>
              <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-green-50 transition transform duration-100 ease-out">type Of Place</p>
              <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-green-50 transition transform duration-100 ease-out">Price</p>
              <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-green-50 transition transform duration-100 ease-out">rooms</p>
              <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-green-50 transition transform duration-100 ease-out">yei</p>
            </div>

            <div className="flex flex-col">
              {searchResults.map((item) => (
                <InfoCard key={item.id} img={item.img[0] ? item.img[0].url : "https://res.cloudinary.com/dvloopr/image/upload/v1631716661/bang_0aba0a1c34.jpg"} id={item.id} location={item.location} title={item.title} description={item.description} star={item.star} price={item.price} total={item.total} imgUrl={item.imgUrl} />
              ))}
            </div>
          </section>
          <section className="hidden xl:inline-flex xl:min-w-[600px]">
            <Map searchResults={searchResults} />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://holidaze-backend-three.herokuapp.com/hotels").then((res) => res.json());
  console.log(searchResults);

  return {
    props: {
      searchResults,
    },
  };
}
