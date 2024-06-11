import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaPlus } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import { useGetBooksByCategoryQuery } from '../../slices/booksApiSlice';
import { useNavigate, useParams } from 'react-router-dom';

const BookListScreen = () => {
  const { pageNumber } = useParams();

  const { data, isLoading, error } = useGetBooksByCategoryQuery({
    category: 'shopAllproducts',
    pageNumber,
  });
  const navigate = useNavigate();

  const createBookHandler = async () => {
    navigate('/admin/book/add');
  };

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h2>Books</h2>
        </Col>
        <Col className='text-end'>
          <Button className='my-3' onClick={createBookHandler}>
            <FaPlus /> Create Book
          </Button>
        </Col>
      </Row>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error.data.message}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Vender</th>
                <th>Author</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.books.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.category}</td>
                  <td>{book.price}</td>
                  <td>{book.vender}</td>
                  <td>{book.author}</td>

                  <td>
                    <LinkContainer to={`/admin/book/${book._id}/edit`}>
                      <Button variant='light' className='btn-sm mx-2'>
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={data.pages} page={data.page} isAdmin={true} />
        </>
      )}
    </>
  );
};

export default BookListScreen;
