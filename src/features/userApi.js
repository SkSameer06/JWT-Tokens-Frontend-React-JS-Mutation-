import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://56d9-180-151-133-23.ngrok-free.app",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Allow-Credentials", "true");
      headers.set("Access-Control-Request-Headers", "*");
      const token = getState().auth.accesstoken;
      const refreshToken = getState().auth.refreshtoken;
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
      }),
    }),
  }),
});

export const {
  useGetUserByNameMutation,
  useGetUserByLoginMutation,
  useGetUserDataMutation,
  useGetRefreshedAccessTokenMutation,
  useGetValidateAccessTokenMutation,
} = userApi;
