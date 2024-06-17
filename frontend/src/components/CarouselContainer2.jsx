import './CarouselContainer2.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Grade from './Grade';
import { gradeData2, responsive } from './data';
import { Row, Col, Button, Container } from 'react-bootstrap';

export default function CarouselContainer2() {
  const product = gradeData2.map((item, index) => (
    <Grade
      key={index}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <>
      <Row className='grade-container2  mb-5'>
        <Col xs={12} md={12} lg={10} className='carousel-container2'>
          <Container>
            <Carousel styel={{ zIndex: '10' }} responsive={responsive}>
              {product}
            </Carousel>
          </Container>
        </Col>
        <Col xs={12} md={12} lg={2} className='shop-now2'>
          <div className='shop-now-title'>Book Sets Under $30</div>
          <div className='shop-now-description'>
            Hundreds of Ideas to Build Their Home Library
          </div>
          <Button className='hero-btn2'>SHOP NOW</Button>
        </Col>
      </Row>
    </>
  );
}
