import { CLUBS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const articlesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => ({
        url: `${CLUBS_URL}/articles`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Article'],
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApiSlice;
