import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://9ff3-180-151-133-23.ngrok-free.app",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Allow-Credentials", "true");
      // headers.set("Access-Control-Request-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, refresh");
      headers.set("Access-Control-Request-Headers", "*");
      // const token = localStorage.getItem("AccessToken");
      const token = getState().auth.accesstoken;
      // console.log("Prepare header token:::::::>", token);
      // const refreshToken = localStorage.getItem("RefreshToken");
      const refreshToken = getState().auth.refreshtoken;
      // console.log("Prepare header refresh token:::::::>", refreshToken);
      headers.set("authorization", `Bearer ${token}`);
      headers.set("refresh", refreshToken);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUserByName: builder.mutation({
      query: ({ name, number, email, password }) => ({
        url: "/signUp",
        method: "POST",
        body: {
          name: name,
          number: number,
          email: email,
          password: password,
        },
      }),
    }),

    getUserByLogin: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: {
          email: email,
          password: password,
        },
      }),
    }),

    getUserData: builder.mutation({
      query: () => ({
        url: "/userData",
        method: "POST",
      }),
    }),

    getRefreshedAccessToken: builder.mutation({
      query: () => ({
        url: "/refreshtoken",
        method: "POST",
      }),
    }),

    getValidateAccessToken: builder.mutation({
      query: () => ({
        url: "/validateAccessToken",
        method: "POST",
        // headers: {
        //   'Origin': 'http://localhost:3001'
        // },
      }),
    }),

    // getValidateAccessToken: builder.query({
    //   query: () => ({
    //     url: "/validateAccessToken",
    //     method: "GET",
    //     headers: { 
    //       'ngrok-skip-browser-warning': 'true' 
    //    }
    //   }),
    // }),

    // getUserData: builder.query({
    //   query: () => ({
    //     url: "/userData",
    //     method: "GET",
    //     headers: { 
    //       'ngrok-skip-browser-warning': 'true' 
    //    }
    //   }),
    // }),

  }),
});

export const {
  useGetUserByNameMutation,
  useGetUserByLoginMutation,
  useGetUserDataMutation,
  useGetRefreshedAccessTokenMutation,
  useGetValidateAccessTokenMutation,
  // // useGetValidateAccessTokenQuery,
  // useGetUserDataQuery,
} = userApi;