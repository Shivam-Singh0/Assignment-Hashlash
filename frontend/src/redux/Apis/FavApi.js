import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let baseUrl = "http://localhost:3000/api/favorites";

const baseQuery =  fetchBaseQuery({baseUrl})

export const FavsApi = createApi({
    baseQuery,
    reducerPath: "FavsApi",
    endpoints : (builder) => ({
        saveFav : builder.mutation({
            query : ({name, country, web_page}) => ({
                url: "",
                method: "Post",
                body: {name, country, web_page}
            }),
            invalidatesTags: ["favorites"]
        }),
        getFavs : builder.query({
            query : () => ({
                url: "",
            }),
            providesTags : ["favorites"]
        }),
       
    }) 
})

export const {useGetFavsQuery, useSaveFavMutation} = FavsApi