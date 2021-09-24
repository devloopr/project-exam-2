import Login from "../components/Login";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { NavBar } from "../components/NavBar";

function login() {
  return (
    <>
      <div className="bg-green-50 flex flex-col h-screen justify-between">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>holidaZe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <Header placeholder={`Welcome to the login!`} />
        <main className="mx-auto p-4 flex-grow bg-green-100">
          <h1>login</h1>
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
