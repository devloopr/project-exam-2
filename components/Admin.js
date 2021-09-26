import Footer from "../components/Footer";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";
import Inbox from "../components/Inbox";
import InfoCard from "../components/InfoCard";

const schema = yup.object().shape({
  title: yup.string().required("Enter a title").min(3),
  description: yup.string().required("Enter a short description").min(10, "The message must be at least 10 characters"),
  long: yup.string().required("Enter a price").min(1), // integer value
  lat: yup.string().required("Enter a price").min(1),
  featured: yup.boolean(),
  imgUrl: yup.string().required("Must a a working img url").min(3),
  adress: yup.string().required("Enter a adress").min(6),
  price: yup.string().required("Enter a price").min(1),
  total: yup.string().required("Enter a total price").min(1),
  star: yup.number(),
});

function Admin({ inboxMessages }) {
  // Skriv inn urlen som du skal poste til. Sikre at alle permissions er satt, gjerne sett alle permission på Public ??
  const url = "http://localhost:1337/Hotels";

  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // Send inn data som skal lages inn i strapi endpoint
        const { data } = await axios.get(url);
        setHotels(data);
        console.log("hotelssss==>>", data);
      } catch (error) {
        console.log("error fetching hotels==>>", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedHotel) {
      const fieldsToPopulate = Object.entries(selectedHotel);
      fieldsToPopulate.forEach(([k, v]) => setValue(k, v));
    }
  }, [selectedHotel]);

  console.log("Inbox: ==>>>", selectedHotel);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function sendForm(data) {
    try {
      console.log("HELLO==>>", data);

      if (selectedHotel) {
        // edit hotel
        const res = await axios.put(`${url}/${selectedHotel.id}`, data);
        console.log("selectedHotel==>>", res);
      } else {
        // Send inn data som skal lages inn i strapi endpoint
        const res = await axios.post(
          url,
          data /*{
          title: data.title, // data.title er det du får i console.log(data)
          description: data.description,
          imgUrl: data.imgUrl,
          long: data.long,
          lat: data.lat,
          featured: data.featured,
          adress: data.adress,
          price: data.price,
          total: data.total,
          star: data.star,
        }*/
        );
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onEdit = (hotelId) => {
    const hotel = hotels.find((h) => h.id == hotelId);
    setSelectedHotel(hotel);
  };

  return (
    <>
      <div className="py-12 text-center bg-green-50">
        <h1 className="text-xl m-auto sm:text-3-xl  md:text-1xl xl:text-2xl w-[280px] pl-4 sm:w-[280px] md:w-[330px] xl:w-[440px] p-2 bg-indigo-100 bg rounded-lg font-mono shadow-lg text-gray-900 mb-4"> Welcome to the Admin dashboard! </h1>
      </div>
      <div className="bg-green-50">
        <main className="flex bg-green-50 shadow-2xl border-2 border-opacity-50 sm:w-9/12 md:w-7/12 p-4 rounded-lg flex-initial mb-20 mx-auto">
          <section className="flex items-center justify-center pb-12  w-full">
            <div className="w-full px-6 bg-green-50 rounded-lg  h-full ">
              <h3 className="text-md m-auto sm:text-sm md:text-lg xl:text-xl w-[280px] pl-4 sm:w-[280px] md:w-[330px] xl:w-[440px] p-2 bg-indigo-100 bg rounded-lg font-mono shadow-lg text-gray-900 mt-6 mb-8"> {selectedHotel ? "Edit" : "Edit or add a new"} hotel:</h3>
              <form onSubmit={handleSubmit(sendForm)} className="mx-8 space-y-8">
                <div>
                  <input type="text" {...register("title")} className="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Title:" />
                  {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                  <input type="text" {...register("description")} className="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Description:" />
                  {errors.description && <span className="font-semibold text-red-300">{errors.description.message}</span>}
                </div>
                <div>
                  <label> Image url: </label>
                  <input type="string" {...register("imgUrl")} className="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" />
                  {errors.imgUrl && <span>{errors.imgUrl.message}</span>}
                </div>

                <div>
                  <input type="text" {...register("long")} className="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Longitude:" />
                </div>
                {errors.long && <span>{errors.long.message}</span>}
                <div>
                  <input type="text" {...register("lat")} className="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Latitude:" />
                  {errors.lat && <span>{errors.lat.message}</span>}
                </div>

                <div>
                  <label> Featured? </label>
                  <input type="checkbox" {...register("featured")} className="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" />
                </div>
                <div>
                  <input type="text" {...register("adress")} className="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Adress" />
                  {errors.adress && <span>{errors.adress.message}</span>}
                </div>
                <div>
                  <input type="text" {...register("price")} className="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Price:" />
                  {errors.title && <span>{errors.price.message}</span>}
                </div>
                <div>
                  <input type="text" {...register("total")} className="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Total:" />
                  {errors.total && <span>{errors.total.message}</span>}
                </div>
                <div>
                  <input type="number" {...register("star")} className="w-full p-2 text-sm border-b-2 border-red-400 outline-none opacity-50 focus:border-green-400" placeholder="Stars:" />
                </div>
                {errors.star && <span>{errors.star.message}</span>}

                <button className="text-gray-900 bg-red-400 px-6 py-2 shadow-md rounded-lg font-bold my-4 hover:shadow-xl hover:bg-green-300 active:scale-90 transition duration-150 hover:text-gray-600" type="submit">
                  Send Form
                </button>
                <div></div>
              </form>
            </div>
          </section>
        </main>
      </div>

      <section className="w-9/12 m-auto">
        <h3 className="text-md m-auto sm:text-sm md:text-lg xl:text-xl w-[280px] pl-4 sm:w-[280px] md:w-[330px] xl:w-[440px] p-2 bg-indigo-100 bg rounded-lg font-mono shadow-lg text-gray-900 mt-6 mb-8">List of hotels to edit</h3>
        <div className="flex flex-col">
          {hotels.map((item) => (
            <InfoCard showEditButton onEdit={onEdit} key={item.id} img={item.img ? item.img[0]?.url : "https://res.cloudinary.com/dvloopr/image/upload/v1631716661/bang_0aba0a1c34.jpg"} id={item.id} location={item.location} title={item.title} description={item.description} star={item.star} price={item.price} total={item.total} imgUrl={item.imgUrl} />
          ))}
        </div>
      </section>

      <aside>
        <section>
          <h3 className="text-xl mt-20 m-auto sm:text-3-xl md:text-1xl xl:text-2xl w-[280px] pl-4 sm:w-[280px] md:w-[330px] xl:w-[440px] p-2 bg-indigo-100 bg rounded-lg font-mono shadow-lg text-gray-900 mb-4"> Messages from holidaze:</h3>
          <div className="flex flex-col">
            {inboxMessages.map((item) => (
              <Inbox key={item.id} name={item.name} id={item.id} email={item.email} subject={item.subject} message={item.message} />
            ))}
          </div>
        </section>
      </aside>
      <Footer />
    </>
  );
}

export default Admin;
