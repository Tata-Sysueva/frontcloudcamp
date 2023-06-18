import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { type FormDataTypeApi } from '../types';

export const rootAPISlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp'
  }),
  endpoints: (builder) => ({
    postFormData: builder.mutation<void, FormDataTypeApi>({
      query: (data) => ({
        url: '/frontend',
        method: 'POST',
        body: data
      })
    })
  })
});

export const { usePostFormDataMutation } = rootAPISlice;
