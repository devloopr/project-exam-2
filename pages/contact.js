import Contact from "../components/Contact";
import Head from "next/head";

function contact() {
  return (
    <div className="bg-green-50">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>holidaZe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact />
    </div>
  );
}

export default contact;
