import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGetArticlesQuery } from '../slices/articlesApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const NoArticlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20rem 0;
  flex-direction: column;

  & a {
    font-size: 2rem;
    text-decoration: none;
  }
`;

const ErrorHeader = styled.h2`
  font-size: 3rem;
`;

const ArticleScreen = () => {
  const { data, isLoading, error } = useGetArticlesQuery({});

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : data.length ? (
        <Row>
          {data.map((article, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to=''>
                  <Card.Img src={article.imageUrl} variant='top' />
                </Link>

                <Card.Body>
                  <Link to=''>
                    <Card.Title as='div' className='book-title'>
                      <strong>{article.title}</strong>
                    </Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <NoArticlesContainer>
          <ErrorHeader>You don't have access yet</ErrorHeader>
          <Link to='/clubs/plans'>
            <Button>Buy a plan</Button>
          </Link>
        </NoArticlesContainer>
      )}
    </Container>
  );
};

export default ArticleScreen;
