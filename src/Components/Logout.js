import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/authSlice";
import { setAccessToken } from "../features/authSlice";
// import { setToken } from "../features/authSlice";

import {
  useGetUserDataMutation,
  useGetRefreshedAccessTokenMutation,
  useGetValidateAccessTokenMutation,
} from "../features/userApi";

// import { useGetUserDetailsQuery } from "../features/userDataApi";

const Logout = () => {
  const refreshToken = useSelector((state) => state.auth.refreshtoken);
  const [getUserData] = useGetUserDataMutation();

  const [getRefreshedAccessToken] = useGetRefreshedAccessTokenMutation();

  const [getValidateAccessToken] = useGetValidateAccessTokenMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUser = () => {
    getUserData({})
      .then((response) => {
        console.log(response, "DATA RESPONSE");
        //console.log(response.error.data, "ERROR RESPONSE");
        alert(JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log("invalid User", err);
      });
  };

  useEffect(() => {
    // Function to execute on component mount (equivalent to page load)
    handleComponentMount();

    // Cleanup function (optional) handleComponentMount() {
    // return () => {
    //   //Cleanup logic (if needed)
    // };
  }, []);

  function handleComponentMount() {
    console.log("AAAAAAAAAAAAAAAA");
    getValidateAccessToken({})
      .then((response) => {
        console.log(response);
        console.log("RESPONSE", response.data);
        if (response.data === "Sameer") {
          console.log("Token Not Expired");
        } else {
          dispatch(setAccessToken(response.data));
        }
      })
      .catch((err) => {
        console.log("ERROR RESPONSE", err);
      });
  }

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <div className="logout">
        <h1>Hello</h1>
        <button className="logout_button" onClick={handleLogOut}>
          Logout
        </button>
        <button className="logout_button">User Name</button>
        <button className="logout_button" onClick={handleUser}>
          User Details
        </button>
      </div>
    </>
  );
};

export default Logout;
