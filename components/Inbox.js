function Inbox({ name, email, subject, messages }) {
  return (
    <div className="flex bg-green-50 shadow-2xl border-2 border-opacity-50 sm:w-9/12 md:w-7/12 p-4 rounded-lg flex-initial mb-8 mx-auto">
      <div className="flex items-center justify-center pb-2  w-full">
        <div className="w-full px-6 bg-green-50 rounded-lg  h-full">
          <p> From: {name}</p>
          <p> Email: {email}</p>
          <p> Subject: {subject}</p>
          <p> Message: {messages}</p>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
