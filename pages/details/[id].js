import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { NavBar } from "../../components/NavBar";

function details({ result }) {
  console.log(result);
  return (
    <>
      <div className="bg-green-50">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>holidaZe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Header />
        <div className="w-full flex">
          <h1 className="w-50 m-auto mt-20 text-xl sm:text-1xl md:text-2xl xl:text-3xl w-[220px] pl-4 sm:w-[230px] md:w-[250px] xl:w-[260px] mb-3 p-2 bg-indigo-100 bg rounded-lg font-mono shadow-xl text-gray-900">Details:</h1>
        </div>
        <div className="pt-20 "></div>
        <main className="flex flex-col xl:flex-row bg-green-50 shadow-2xl border-2 border-opacity-50 md:w-7/12 p-4 rounded-lg flex-initial mb-20 mt-10 mx-auto">
          <div className="relative w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image src={result.img[0].url} layout="fill" objectFit="cover" className="rounded-2xl" />
          </div>

          <div className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{result.title}</h2>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-indigo-100 flex py-2 px-3">
                  <span className="text-indigo-400 mr-1 mt-1">$</span>
                  <span className="font-bold text-gray-500 text-3xl">{result.price}</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
              </div>
            </div>

            <p className="text-gray-500">{result.description}</p>

            <div className="flex py-4 space-x-4">
              <div className="relative"></div>
              <Link href="/contact">
                <button type="button" className="text-sm text-gray-900 bg-red-400 px-4 py-2 rounded-lg  shadow-md hover:shadow-xl hover:bg-indigo-100 active:scale-90 transition duration-150 hover:text-gray-600">
                  BOOK
                </button>
              </Link>
            </div>
            <div className="pb-20"></div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(content) {
  console.log(content);
  const res = await fetch(`https://holidaze-backend-three.herokuapp.com/Hotels/${content.params.id}`);
  const result = await res.json();
  console.log("RESULT: ", result);

  return {
    props: {
      result,
    },
  };
}

export default details;
