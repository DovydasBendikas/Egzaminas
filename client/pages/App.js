import Axios from "axios";
import React, {useState, useEffect} from "react";
import Header from '../components/header';
import Button from 'react-bootstrap/Button';
import Home from '../components/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(eventData) {
  const [usernameReg, setUsernameReg] = useState("");
  const [username, setUsername] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      Username: usernameReg,
      Password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };
// console.log(eventData)

  const login = () => {

    Axios.post("http://localhost:3001/login", {
     
      Username: username,
      Password: password,
    }).then((response) => {
    if(response) {
      setAuthenticated(true)
      localStorage.setItem("authenticated", true);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      console.log(response)
    } else {
      setAuthenticated(false)
      localStorage.setItem("authenticated", false);
    }
  })
  };

  const logOut = () => {
    localStorage.clear()
    setAuthenticated(false)
  }

  useEffect(() => {

    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }
  }, [])


if(!authenticated) {

  return (
    <div className="text-center">
      <div>
        <h3>Register</h3>
        <label className="mx-2">Username</label>
        <input
        className="my-2"
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        ></input>
        <br />
        <label className="mx-2">Password</label>
        <input
        className="my-2"
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        ></input>
        <br />
        <Button onClick={register}>Register</Button>
      </div>
      <hr />
      <div>
        <h3>Login</h3>
        <label className="mx-2">Username</label>
        <input
        className="my-2"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <br />
        <label className="mx-2">Password</label>
        <input
        className="my-2"
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br />
        <Button onClick={login}>Login</Button>
      </div>
    </div>
  )
} else {
  return (
    <div>
  <Header />
  <Home />
  <div href="/"></div>

    <hr />

  <div className="text-center">

  <footer>
    <Button onClick={logOut}>
      Log Out
    </Button>
  </footer>
  </div>
    </div>
  )
}
}

export default App;

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:3001/getEvents");
//   const data = await res.json();
//   return {
//     props: {
//       eventData: data,
//     },
//   };
// }
