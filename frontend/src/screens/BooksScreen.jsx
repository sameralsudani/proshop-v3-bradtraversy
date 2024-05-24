import React from 'react';
import Paginate from '../components/Paginate';
import Book from '../components/Book';
import { Row, Col } from 'react-bootstrap';
import { useGetBooksQuery } from '../slices/booksApiSlice';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Meta from '../components/Meta';
import Message from '../components/Message';

export default function BooksScreen() {
  const { pageNumber, keyword, category } = useParams();
  const { data, isLoading, error } = useGetBooksQuery({
    pageNumber,
  });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>Books</h1>
          <Row>
            {data.books
              .filter((item) => {
                return item.category === category;
              })
              .map((book) => (
                <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                  <Book book={book} />
                </Col>
              ))}
          </Row>
          <Paginate
            pages={
              data.books.filter((item) => {
                return item.category === category;
              }).pages
            }
            page={data.page}
            keyword={keyword ? keyword : ''}
            category={category}
          />
        </>
      )}
    </div>
  );
}
