import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";
import Header from "./Header";

function Contact() {







  
  return (
    <>
      <NavBar />
      <Header />
      <div className="py-12">
        <h1>Contact us!</h1>
        <p>lorem ipsum hallaaiii</p>
      </div>
      <main className="flex bg-green-50 shadow-2xl border-2 border-opacity-50 w-7/12 p-4 rounded-lg flex-initial mb-20 mx-auto">
        <section className="bg-green-100 rounded-lg w-4/12 p-6">
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl pb-8">Contact information</h4>

            <div className="flex">
              <PhoneIcon className="w-8" />
              <span className="text-sm font-normal pl-4">+47 98404040</span>
            </div>
            <div className="flex">
              <MailIcon className="w-8" />
              <span className="text-sm font-normal pl-4">info@holidaze.com</span>
            </div>
            <div className="flex">
              <LocationMarkerIcon className="w-8" />
              <span className="text-sm font-normal pl-4">Torget 12, 5050 Bergen</span>
            </div>
          </div>
          <div>
            <a href="#">{/* social media icons */}</a>
          </div>
        </section>
        <section className="flex items-center justify-center pb-12  w-full">
          <div className="w-full px-6 bg-green-50 rounded-lg  h-full">
            <form className="mx-8 space-y-8">
              <div>
                <input type="text" class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Full Name" />
              </div>
              <div>
                <input type="text" class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Your Email" />
              </div>
              <div>
                <input type="text" class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Subject" />
              </div>
              <div>
                <textarea name="message" class="w-full p-6 text-sm border-b-2 border-red-400 rounded-lg outline-none opacity-50 focus:border-green-400" placeholder="Enter your message"></textarea>
              </div>

              <button className="text-gray-900 bg-red-400 px-6 py-2 shadow-md rounded-lg font-bold my-4 hover:shadow-xl hover:bg-green-300 active:scale-90 transition duration-150 hover:text-gray-600">Send Form</button>
              <div></div>
            </form>
          </div>
        </section>
        {/* <form>
          <div className="flex justify-start flex-wrap pl-6 pt-4 pb-6">
            <div className="text-md">
              <label>First Name:</label>
              <input className="border-0 cursor-pointer bg-green-50 font-light p-2 focus:border-0 focus:outline-none focus:border-b-2 focus:border-red-400" type="text" />
            </div>
            <div className="text-md">
              <label>Last Name:</label>
              <input className="border-0 cursor-pointer bg-green-100 rounded-lg font-light p-2 focus:border-0 focus:outline-none focus:border-b-2 focus:border-red-400" type="text" />
            </div>
            <div className="text-md">
              <label>Email:</label>
              <input className="border-0 cursor-pointer bg-green-50 font-light p-2 focus:border-0 focus:outline-none focus:border-b-2 focus:border-red-400" type="email" />
            </div>
            <div className="text-md">
              <label>Phone:</label>
              <input className="border-0 cursor-pointer bg-green-50 font-light p-2 focus:border-0 focus:outline-none focus:border-b-2 focus:border-red-400" type="tel" />
            </div>
          </div>
          <div className="flex justify-start pl-6 pt-4 pb-6">
            <div className="text-md">
              <label>Message:</label>
              <textarea className="border-0 cursor-pointer font-light p-2 focus:border-0 focus:outline-none focus:border-b-2 focus:border-red-400 w-80 bg-green-100" type="tel"></textarea>
            </div>
          </div>
        </form> */}
      </main>
      <Footer />
    </>
  );
}

export default Contact;
