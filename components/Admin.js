import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";
import Header from "./Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";

const schema = yup.object().shape({
  title: yup.string().required("Enter a title").min(3),
  description: yup.string().required("Enter a short description").min(20),
  longitude: yup.number(),
  longitude: yup.number(),
  featured: yup.boolean(),
  adress: yup.string().required("Enter a adress").min(6),
  price: yup.string().required("Enter a price").min(5),
  total: yup.string().required("Enter a total price").min(5),
  star: yup.number(),
});

function Admin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Skriv inn urlen som du skal poste til. Sikre at alle permissions er satt, gjerne sett alle permission på Public ??
  const url = "http://localhost:1337/auth/local";

  async function sendForm(data) {
    event.preventDefault();

    console.log(data);

    try {
      // Send inn data som skal lages inn i strapi endpoint
      const res = await axios.post(url, data, {
        title: data.title, // data.title er det du får i console.log(data)
        description: data.description,
        longitude: data.long,
        latitude: data.lat,
        featured: data.featured,
        adress: data.adress,
        price: data.price,
        total: data.total,
        star: data.star,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <NavBar />
      <Header />
      <div className="py-12 text-center">
        <h1> Welcome to the Admin dashboard! </h1>
        <p>lorem ipsum hallaaiii</p>
      </div>
      <main className="flex bg-green-50 shadow-2xl border-2 border-opacity-50 w-7/12 p-4 rounded-lg flex-initial mb-20 mx-auto">
        <section className="flex items-center justify-center pb-12  w-full">
          <div className="w-full px-6 bg-green-50 rounded-lg  h-full">
            <form onSubmit={handleSubmit(sendForm)} className="mx-8 space-y-8">
              <div>
                <input type="text" {...register("title")} class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Title:" />
                {errors.title && <span>{errors.title.message}</span>}
              </div>
              <div>
                <input type="text" {...register("description")} class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Description:" />
                {errors.title && <span>{errors.description.message}</span>}
              </div>
              {/* IMG PICKER */}
              <div>
                <input type="number" {...register("longitude")} class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Longitude:" />
              </div>
              {errors.title && <span>{errors.longitude.message}</span>}
              <div>
                <input type="number" {...register("latitude")} class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Latitude:" />
                {errors.title && <span>{errors.latitude.message}</span>}
              </div>

              <div>
                <label> Featured? </label>
                <input type="checkbox" {...register("featured")} class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" />
              </div>
              <div>
                <input type="text" {...register("adress")} class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Adress" />
                {errors.title && <span>{errors.adress.message}</span>}
              </div>
              <div>
                <input type="text" {...register("price")} class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Price:" />
                {errors.title && <span>{errors.price.message}</span>}
              </div>
              <div>
                <input type="text" {...register("total")} class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Total:" />
                {errors.title && <span>{errors.total.message}</span>}
              </div>
              <div>
                <input type="number" {...register("star")} class="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Stars:" />
              </div>

              <button className="text-gray-900 bg-red-400 px-6 py-2 shadow-md rounded-lg font-bold my-4 hover:shadow-xl hover:bg-green-300 active:scale-90 transition duration-150 hover:text-gray-600">Send Form</button>
              <div></div>
            </form>
          </div>
        </section>
      </main>
      <aside>
        <section>
          <div>Message Box:</div>
        </section>
      </aside>
      <Footer />
    </>
  );
}

export default Admin;
