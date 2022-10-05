import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IContactModel} from "./models/contact.model";


export const contactsApi = createApi({
        reducerPath: 'contactsApi',
        baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
        tagTypes: ['Contact'],
        endpoints: builder => ({
            getContacts: builder.query<IContactModel[], void>({
                query: () => '/contacts-list',
                providesTags: result => ['Contact']
            }),
            deleteContact: builder.mutation<IContactModel, number>({
                query: (id) => {
                    return {
                        url: `/contacts-list/${id}`,
                        method: "DELETE"
                    }
                },
                invalidatesTags: ['Contact']
            }),
            editContact: builder.mutation<number, IContactModel>({
                query: ({...contact}) => {
                    return {
                        url: `/contacts-list/${contact.id}`,
                        method: "PUT",
                        body: {...contact}
                    }
                },
                invalidatesTags: ['Contact']
            }),
            addContact: builder.mutation<void, IContactModel>({
                query: (contact) => {
                    return {
                        url: `/contacts-list`,
                        method: "POST",
                        body: contact
                    }
                },
                invalidatesTags: ['Contact']
            }),
            searchUsers: builder.query<IContactModel[], string>({
                query: (search: string) => ({
                    url: `/contacts-list`,
                    params: {
                        q: search,
                        per_page: 10
                    }
                }),
                providesTags: result => ['Contact'],
                transformResponse: (response: IContactModel[]) => response
            }),
        })
    }
)

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
    useEditContactMutation,
    useLazyGetContactsQuery,
    useSearchUsersQuery
} = contactsApi
