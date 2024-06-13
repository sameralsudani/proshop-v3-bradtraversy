import { Row, Col, Image, Card, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CarouselContainer from '../components/CarouselContainer';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const { keyword } = useParams();
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {!keyword ? (
        <>
          <Row style={{ marginBottom: '-40px' }}>
            <Col xs={12} md={12}>
              <div className='main-section'>
                <div className='main-section-2'>
                  <h3>Read With Us</h3>
                  <Button style={{ backgroundColor: '#1888ff' }}>
                    Shop Now
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='clubs-section mb-5'>
            <Col xs={12} md={6} className='clubs-section'>
              <Card style={{ width: '100%', height: '100%' }}>
                <Col className='clubs-section-2'>
                  <Image
                    className='clubs-section-image'
                    src='http://res.cloudinary.com/drrpl4bzt/image/upload/v1718308804/rozgqmywol6kwdl7hquc.png'
                    alt='iamge'
                  />
                  <div>
                    <h3 className='mb-3'>Book clubs</h3>
                    <Button
                      className='clubs-section-2-button mb-3'
                      style={{ backgroundColor: '#1888ff' }}
                    >
                      Place your order
                    </Button>
                  </div>
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
    </>
  );
};

export default HomeScreen;
