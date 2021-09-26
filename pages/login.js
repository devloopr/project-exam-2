import Login from "../components/Login";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { NavBar } from "../components/NavBar";

function login() {
  return (
    <>
      <div className="bg-green-50 flex flex-col h-full justify-between">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>holidaZe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Header placeholder={`Welcome to the login!`} />
        <main className="mx-auto p-4 mt-6 flex-grow bg-green-50">
          <h1 className="text-xl sm:text-3-xl md:text-1xl xl:text-2xl w-[280px] pl-4 sm:w-[280px] md:w-[330px] xl:w-[440px] mb-3 p-2 bg-indigo-100 bg rounded-lg font-mono shadow-lg text-gray-900"> Admin login</h1>
          <section className="">
            <Login />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default login;
