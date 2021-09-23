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
      <form className="p-8 flex flex-col" onSubmit={handleSubmit(loginHandler)}>
        <label htmlFor="name">Username:</label>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} type="email" {...register("identifier")} />
        {errors.identifier && <span>{errors.identifier.message}</span>}

        <label htmlFor="password"> Password:</label>
        <input placeholder="Must be at least 3 letters" onChange={(e) => setPassword(e.target.value)} name="password" type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}

        <input type="submit" />
      </form>
    </>
  );
}

export default login;
