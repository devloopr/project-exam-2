import React from "react";
import Admin from "../components/Admin";


function admin() {
  return (
    <div>
      <Admin inboxMessages={inboxMessages} />
    
    </div>
  );
}

export async function getServerSideProps() { 
  const inboxMessages = await fetch("http://localhost:1337/messages").then((res) => res.json());
console.log(inboxMessages);
  return {
    props: {
      inboxMessages,
    },
  };
  
}

export default admin;
