import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";

const schema = yup.object().shape({
  password: yup.string().required("Enter your password").min(3),
  identifier: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "You have to enter an valid email adress"),
});

function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [success, setSuccess] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const url = "http://localhost:1337/auth/local";

  async function loginHandler(data) {
    event.preventDefault();

    console.log(data);

    try {
      const res = await axios.post(url, data, {
        identifier: data.identifier,
        password: data.password,
      });
      console.log(res.data);
      if (res.data.jwt) {
        setSuccess("Success");
        router.push("/admin");
      }

      localStorage.setItem("token in localstorage", res.data.jwt);
    } catch (error) {
      console.log(error);
      setSuccess("Oops Error");
    }
  }

  return (
    <>
      <div className="w-full bg-green-50">
        <section className="pt-6 pb-20 flex items-center justify-center w-full">
          <div className="w-full bg-green-100 shadow-xl rounded-lg h-full">
            <form className="p-8 flex flex-col" onSubmit={handleSubmit(loginHandler)}>
              <label className="pt-6 mb-2" htmlFor="name">
                Username:
              </label>
              <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} type="email" {...register("identifier")} />
              {errors.identifier && <span>{errors.identifier.message}</span>}

              <label className="pt-6 mb-2" htmlFor="password">
                {" "}
                Password:
              </label>
              <input placeholder="Must be at least 3 letters" onChange={(e) => setPassword(e.target.value)} name="password" type="password" {...register("password")} />
              {errors.password && <span>{errors.password.message}</span>}

              <input className="text-gray-900 bg-red-400 px-6 py-2 shadow-md rounded-lg font-bold my-4 hover:shadow-xl hover:bg-green-300 active:scale-90 transition duration-150 hover:text-gray-600" type="submit" />
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default login;
