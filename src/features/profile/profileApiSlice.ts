import { apiSlice } from '../../app/api/apiSlice';

interface Profile {
    id: string;
    email: string;
    name: string;
}

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query<Profile[], { email: string }>({
            query: ({email}) => ({
                url: `/api/users/?search=${email.replace("@", "%40")}`,
                method: "GET",
            })
        })
    })
})

export const { useGetUserQuery } = userApiSlice;