import React, { useState } from "react";
import { useGetUserByLoginMutation } from "../features/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "../features/authSlice";

const Login = () => {
  const [getUserByLogin] = useGetUserByLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handlerLogin = () => {
    getUserByLogin({
      email: email,
      password: password,
    })
      .then((response) => {
        // console.log(response.data.IncorrectCredentials, "response");
        if (response.data.IncorrectCredentials === 11) {
          console.log("DFGasfdasdf::::::::::::::::::>S");
          alert("Incorrect Credentials");
        } else {
          dispatch(setAccessToken(response.data.AccessToken));
          dispatch(setRefreshToken(response.data.RefreshToken));
          // localStorage.setItem("AccessToken", response.data.AccessToken);
          // localStorage.setItem("RefreshToken", response.data.RefreshToken);
          navigate("/logout");
        }
      })
      .catch((err) => {
        console.log("invalid signUp:::::::::>", err);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ margin: "3%", fontSize: "2rem", color: "white" }}>Login</h2>
      <form onSubmit={handleLogin}>
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
          style={{ padding: "10px", margin: "2%", border: "1px solid black" }}
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
            borderRadius: "30px",
            cursor: "pointer",
          }}
          type="submit"
          onClick={handlerLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
