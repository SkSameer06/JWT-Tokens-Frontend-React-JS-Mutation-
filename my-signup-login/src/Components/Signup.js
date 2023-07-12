import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUserByNameMutation } from "../features/userApi";

const Signup = () => {
  const [getUserByName] = useGetUserByNameMutation();
  const [name, setName] = useState("");
  const [phoneno, setPhoneNO] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const dispatch = useDispatch;

  const handleSignup = (e) => {
    e.preventDefault();
  };

  const handleSign = () => {
    
    setName("");
    setPhoneNO("");
    setEmail("");
    setPassword("");
    // dispatch({
    //   name: name,
    //   phoneno: phoneno,
    //   email: email,
    //   password: password,
    // });

    getUserByName({
      name: name,
      number: phoneno,
      email: email,
      password: password,
    })
      .then((response) => {
        console.log("Success", response);
        alert("Account created");
      })

      // .then((response) => response.json())
      // .then((json) => console.log(json))

      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "lightcyan", fontSize: "2rem" }}>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          style={{ padding: "10px", margin: "2%", border: "1px solid black" }}
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          style={{ padding: "10px", margin: "2%", border: "1px solid black" }}
          type="number"
          placeholder="Phone No"
          value={phoneno}
          required
          onChange={(e) => setPhoneNO(e.target.value)}
        />{" "}
        <br />
        <input
          style={{ padding: "10px", margin: "2%", border: "1px solid black" }}
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          style={{ padding: "10px", margin: "1%", border: "1px solid black" }}
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          style={{
            backgroundColor: "forestgreen",
            color: "white",
            fontSize: "1.6rem",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
          }}
          type="submit"
          onClick={handleSign}
        >
          Sign Up
        </button>
        <br />
        <br />
        <button
          style={{
            backgroundColor: "forestgreen",
            color: "white",
            fontSize: "1.6rem",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
          }}
          type="submit"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Signup;
