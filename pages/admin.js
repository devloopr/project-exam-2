import React from "react";
import Admin from "../components/Admin";
import Header from "../components/Header";
import { NavBar } from "../components/NavBar";

function admin({ inboxMessages }) {
  return (
    <div className="bg-green-50">
      <NavBar />
      <Header />
      <Admin inboxMessages={inboxMessages} />
    </div>
  );
}

export async function getStaticProps() {
  const inboxMessages = await fetch("https://holidaze-backend-three.herokuapp.com/messages").then((res) => res.json());
  console.log(inboxMessages);
  return {
    props: {
      inboxMessages,
    },
  };
}

export default admin;
