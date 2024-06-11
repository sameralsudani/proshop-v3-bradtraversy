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

    getBooksByCategory: builder.query({
      query: ({ category, pageNumber }) => ({
        url: `${BOOKS_URL}/${category}/${pageNumber || 1}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Books'],
    }),

    deleteBook: builder.mutation({
      query: (BookId) => ({
        url: `${BOOKS_URL}/${BookId}`,
        method: 'DELETE',
      }),
      providesTags: ['Book'],
    }),
    createBookReview: builder.mutation({
      query: ({ bookId, rating, comment }) => ({
        url: `${BOOKS_URL}/${bookId}/reviews`,
        method: 'POST',
        body: {
          bookId,
          rating,
          comment,
        },
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
  useGetBooksByCategoryQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useUploadBookImageMutation,
  useDeleteBookMutation,
  useCreateBookReviewMutation,
  useGetTopBooksQuery,
} = booksApiSlice;
