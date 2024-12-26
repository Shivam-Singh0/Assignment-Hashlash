import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const url = "http://universities.hipolabs.com";
const baseQuery = fetchBaseQuery({ baseUrl: url })

export const UniAPi = createApi({
    baseQuery,
    reducerPath : "UniAPi",
    endpoints : (builder) => ({
        searchUni: builder.mutation({
            query : ({query}) => ({
                url: `/search?name=${query}`,
                method : "get"
            }),
            
        }),
       
    })
})

export const {useSearchUniMutation} = UniAPi