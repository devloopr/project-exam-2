import axios from "axios";

function Inbox({ id, name, email, subject, message }) {
  async function deleteThis() {
    const res = await axios.delete(`https://holidaze-backend-three.herokuapp.com/messages/${id}`);

    console.log(res);

    setTimeout(() => {
      window.location.reload();
    });
  }

  return (
    <div className="flex bg-green-50 mt-2 shadow-2xl border-2 border-opacity-50 sm:w-9/12 md:w-7/12 p-4 rounded-lg flex-initial mb-8 mx-auto">
      <div className="flex items-center justify-center pb-2  w-full">
        <div className="w-full px-6 bg-green-50 rounded-lg  h-full">
          <p className=""> FROM: {name}</p>
          <p> EMAIL: {email}</p>
          <p> SUBJECT: {subject}</p>
          <p> MESSAGE: {message}</p>
          <button className="text-gray-900 bg-red-400 px-6 py-2 shadow-md rounded-lg font-bold my-4 hover:shadow-xl hover:bg-green-300 active:scale-90 transition duration-150 hover:text-gray-600" onClick={deleteThis}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
