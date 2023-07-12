import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/authSlice";
import { setAccessToken, setRefreshToken } from "../features/authSlice";
// import { setToken } from "../features/authSlice";

import {
  useGetUserDataMutation,
  useGetRefreshedAccessTokenMutation,
  // useGetValidateAccessTokenQuery,
  // useGetUserDataQuery,
  useGetValidateAccessTokenMutation,
} from "../features/userApi";

// import { useGetUserDetailsQuery } from "../features/userDataApi";

const Logout = () => {
  const refreshToken = useSelector((state) => state.auth.refreshtoken);
  const [getUserData] = useGetUserDataMutation();

  const [getRefreshedAccessToken] = useGetRefreshedAccessTokenMutation();

  const [getValidateAccessToken] = useGetValidateAccessTokenMutation();

  // const {data : getValidateAccessTokenn} = useGetValidateAccessTokenQuery();

  //  console.log("Data od Validate:::::>",getValidateAccessTokenn);

  // const {data: getUserData} = useGetUserDataQuery();

  // console.log(getUserData);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  const handleUser = () => {
  //   // console.log("Response of User Data::::::::>",getUserData);
  //    console.log("Response of User Data::::::::>",JSON.stringify(getUserData));
  //    alert(JSON.stringify(getUserData));
    getUserData({})
      .then((response) => {
         //console.log(response, "DATA RESPONSE");
    //     //console.log(response.error.data, "ERROR RESPONSE");
         alert(JSON.stringify(response.data));
       })
       .catch((err) => {
         console.log("invalid User", err);
       });
   };

  useEffect(() => {


    
    
    // const AccessToken = localStorage.getItem("AccessToken");
    // const RefreshToken = localStorage.getItem("RefreshToken");
    
    // dispatch(setAccessToken(AccessToken));
    // dispatch(setRefreshToken(RefreshToken));

    
    handleComponentMount();
  //       const clearLocalStorage = () => {
  //   //  localStorage.clear();
  //     //localStorage.removeItem("persist:root");
  //  };

  //  window.addEventListener('beforeunload', clearLocalStorage);

  //  return () => {
  //    window.removeEventListener('beforeunload', clearLocalStorage);
  //  };
  }, []);

  function handleComponentMount() {

    // const data1 = localStorage.getItem("persist:root");

    // data1 = data1.replace(/"queries":\{[^{}]*\}/g, '"queries":{}');

    // console.log(data1);    
//     console.log("Vlaidate Access token::::::::>",getValidateAccessTokenn);
//     const data1 = localStorage.getItem("persist:root");
//     console.log(data1);
//     const parsedData = JSON.parse(data1);
//     console.log("Parsed Data::::::>",parsedData);
//     const userApiData = JSON.parse(parsedData.userApi);
//     console.log("User Api Data::::::>",userApiData);
//     let userData = userApiData.queries;
//     console.log("User Data::::::>",userData);
//     const data2 = userData["getValidateAccessToken(undefined)"].data;

// console.log(data2); 
// userData = {};

// let ress = parsedData+userApiData+userData;
// console.log("Result::::::>",ress);

// localStorage.removeItem("persist:root");

//         if (data2 === "Sameer") {
//           console.log("Token Not Expired");
//         } else {
//           dispatch(setAccessToken(data2));
//           // localStorage.setItem("AccessToken",getValidateAccessToken);
//          }
    //   })
    //   .catch((err) => {
    //     console.log("ERROR RESPONSE", err);
    //   });

    getValidateAccessToken({})
    .then((response) => {
       console.log(response, "DATA RESPONSE");
  //     //console.log(response.error.data, "ERROR RESPONSE");
            if (response.data === "Sameer") {
              console.log("Token Not Expired");
            } else {
              dispatch(setAccessToken(response.data));
              // localStorage.setItem("AccessToken",getValidateAccessToken);
             }
     })
     .catch((err) => {
       console.log("invalid User", err);
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