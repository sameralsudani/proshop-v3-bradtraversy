import { Row, Col, Image, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CarouselContainer from '../components/CarouselContainer';

const HomeScreen = () => {
  const { keyword } = useParams();

  return (
    <>
      {!keyword ? (
        <>
          <Row style={{ marginBottom: '-40px' }}>
            <Col xs={12} md={12}>
              <div className='main-section'>
                <div className='main-section-2'>
                  <div className='main-section-2-title'>Read With Us</div>
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
                    <h3 className='clubs-section-2-title mb-3'>Book clubs</h3>
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
