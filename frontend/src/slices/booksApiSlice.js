import { BOOKS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const booksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ keyword, pageNumber }) => ({
        url: BOOKS_URL,
        params: { keyword, pageNumber },
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Books'],
    }),
    getBookDetails: builder.query({
      query: (BookId) => ({
        url: `${BOOKS_URL}/${BookId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createBook: builder.mutation({
      query: () => ({
        url: `${BOOKS_URL}`,
        method: 'POST',
      }),
      invalidatesTags: ['Book'],
    }),
    updateBook: builder.mutation({
      query: (data) => ({
        url: `${BOOKS_URL}/${data.BookId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    uploadBookImage: builder.mutation({
      query: (data) => ({
        url: `/api/upload`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (BookId) => ({
        url: `${BOOKS_URL}/${BookId}`,
        method: 'DELETE',
      }),
      providesTags: ['Book'],
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${BOOKS_URL}/${data.BookId}/reviews`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Book'],
    }),
    getTopBooks: builder.query({
      query: () => `${BOOKS_URL}/top`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookDetailsQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useUploadBookImageMutation,
  useDeleteBookMutation,
  useCreateReviewMutation,
  useGetTopBooksQuery,
} = booksApiSlice;
