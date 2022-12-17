import { apiSlice } from '../../app/api/apiSlice';

interface AuthTokens {
    access: string;
    refresh: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<AuthTokens, {email: string; password: string}>({
            query: credentials => ({
                url: "/api/auth/token/",
                method: "POST",
                body: { ...credentials }
            })
        })
    })
})

export const { useLoginMutation } = authApiSlice;