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
          <Row className='mt-5 mb-5'>
            <Col xs={12} md={6}>
              <Card style={{ width: '100%', height: '100%' }}>
                <Col>
                  <Card.Body>
                    <Card.Title className='mt-3 mb-3'>
                      Check Out Clubs New Features
                    </Card.Title>
                    <Button className='mb-3' variant='success'>
                      Learn more
                    </Button>
                  </Card.Body>
                </Col>
              </Card>
            </Col>
          </Row>

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
