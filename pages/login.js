import axios from "axios";

function login() {
  async function login() {
    event.preventDefault();

    const { data } = await axios.post("http://localhost:1337/auth/local", {
      // TODO: fiks slik at identifier og password får data fra form.
      identifier: "admin@admin.com",
      password: "admin123",
    });

    // Data
    console.log("Data: ", data);
    // JWT Token
    console.log("JWT: ", data.jwt);
    // User
    console.log("User: ", data.user);

    // Lagre jwt token i localStorage
    localStorage.setItem("token i localstorage", data.jwt);

    // Hente token fra localStorage -> brukes til å sjekke om bruker har token/admin access
    const getToken = localStorage.getItem("token");

    console.log(getToken);

    // Session imorgen: Fikse login, når admin logger inn får vi tilbake JWT og JWT lagres i localStorage
    // Om JWT token finnes -> forandre NAV fra Login -> Admin.
    // Lag en ny side /admin, skriv en sjekk som sjekker om det finnes JWT token i localStorage

    // TODO Stian: Fiks slik at når noen skrive inn brukernavn og passord i form, så sendes denne til
    //  identifier: username,
    //  password: password,
    // Kan fikses med event.target.name.value og event.target.name.password, men kan også settes i egen variabel, finnes
    // Mange løsninger.

    // okei skal pr0ve sterkt :D
  }

  return (
    <div>
      <h1>this is the login</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <label htmlFor="password">password</label>
        <input id="password" name="password" type="text" autoComplete="password" required />
        <button type="submit" onClick={login}>
          Logion
        </button>
      </form>
    </div>
  );
}

export default login;
