import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";
import Header from "./Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  name: yup.string().required("Enter your name").min(5),
  email: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "You have to enter an valid email adress"),
  subject: yup.string().required("Enter a subject").min(5),
  message: yup.string().required("Enter your message").min(10, "The message must be at least 10 characters"),
});

function Contact() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Skriv inn urlen som du skal poste til. Sikre at alle permissions er satt, gjerne sett alle permission på Public ??
  const url = "https://holidaze-backend-three.herokuapp.com/messages";
  const [success, setSuccess] = useState("");

  async function sendForm(data) {
    event.preventDefault();

    console.log(data);

    try {
      // Send inn data som skal lages inn i strapi endpoint
      const res = await axios.post(url, data, {
        name: data.name, // data.title er det du får i console.log(data)
        email: data.email,
        subject: data.subject,
        message: data.message,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setSuccess("Your message is sent!");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }

  return (
    <>
      <NavBar />
      <Header />
      <div className="py-12">
        <h1 className="text-xl sm:text-1xl m-auto md:text-2xl xl:text-3xl w-[220px] pl-4 sm:w-[230px] md:w-[250px] xl:w-[260px] mb-3 p-2 bg-indigo-100 bg rounded-lg font-mono shadow-xl text-gray-900">Contact us!</h1>
      </div>
      <main className="flex flex-col-reverse md:flex-row bg-green-50 shadow-2xl border-2 border-opacity-50 md:w-7/12 p-4 rounded-lg flex-initial mb-20 mx-auto">
        <section className="bg-green-100 rounded-lg md:w-6/12 p-6">
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
            <form onSubmit={handleSubmit(sendForm)} className="mx-6 md:mx-8 space-y-4 md:space-y-6">
              <div>
                <input type="text" {...register("name")} className="w-full p-2 text-sm border-b-2 border-red-200 outline-none opacity-50 focus:border-green-400" placeholder="Full Name" />
                {errors.name && <span className>{errors.name.message}</span>}
              </div>
              <div>
                <input type="text" {...register("email")} className="w-full p-2 text-sm border-b-2 border-red-200 outline-none opacity-50 focus:border-green-400" placeholder="Your Email" />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div>
                <input type="text" {...register("subject")} className="w-full p-2 text-sm border-b-2 border-red-200 outline-none opacity-50 focus:border-green-400" placeholder="Subject" />
                {errors.subject && <span>{errors.subject.message}</span>}
              </div>
              <div>
                <textarea name="message" {...register("message")} className="w-full p-6 text-sm border-b-2 border-red-200 rounded-lg outline-none opacity-50 focus:border-green-400" placeholder="Enter your message"></textarea>
                {errors.message && <span>{errors.message.message}</span>}
              </div>

              <button className="text-gray-900 bg-red-400 px-6 py-2 shadow-md rounded-lg font-bold my-4 hover:shadow-xl hover:bg-green-300 active:scale-90 transition duration-150 hover:text-gray-600">Send Form</button>
              <div></div>
              <div>
                <p> {success} </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
