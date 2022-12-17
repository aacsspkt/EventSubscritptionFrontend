import { apiSlice } from '../../app/api/apiSlice';

export const streamApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllStreams: builder.query({
            query: () => ({
                url: "/api/streams/",
                method: "GET",
            })
        })
    })
})

export const { useGetAllStreamsQuery } = streamApiSlice;