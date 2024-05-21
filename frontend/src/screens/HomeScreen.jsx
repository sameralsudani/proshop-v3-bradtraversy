import { Row, Col, Image, Card, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CarouselContainer from '../components/CarouselContainer';
import HomeLoginScreen from './HomeLoginScreen';
import { useSelector } from 'react-redux';
import bookStore from '../assets/book-store.jpg';

const HomeScreen = () => {
  const { keyword } = useParams();
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Container>
      {!keyword ? (
        <>
          <Row className='mb-4'>
            {!userInfo ? (
              <Col xs={12} md={6}>
                <Card
                  style={{ width: '100%', height: '100%', padding: '20px' }}
                >
                  <HomeLoginScreen />
                </Card>
              </Col>
            ) : (
              <Col xs={12} md={6}>
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Body>
                    <Card.Title>Welcome {userInfo.name}!</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant='primary'>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            )}
            <Col xs={12} md={6}>
              <Card style={{ width: '100%', height: '100%' }}>
                <Image src={bookStore} fluid />
              </Card>
            </Col>
          </Row>
          <h3>Shop by Grade</h3>
          <CarouselContainer />
        </>
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
    </Container>
  );
};

export default HomeScreen;
