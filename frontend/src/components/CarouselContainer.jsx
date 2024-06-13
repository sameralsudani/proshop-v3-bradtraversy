import './CarouselContainer.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Grade from './Grade';
import { gradeData, responsive } from './data';
import { Row, Col, Button, Container } from 'react-bootstrap';

export default function CarouselContainer() {
  const product = gradeData.map((item, index) => (
    <Grade
      key={index}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <Row className='grade-container mb-4'>
      <Col xs={12} md={12} lg={2} className='shop-now'>
        <h2>Classroom Libraries</h2>
        <h5>Create a Community of Readers in Your Classroom</h5>
        <Button style={{ backgroundColor: '#1888ff' }}>Shop Now</Button>
      </Col>
      <Col xs={12} md={12} lg={10} className='carousel-container'>
        <Container>
          <Carousel styel={{ zIndex: '10' }} responsive={responsive}>
            {product}
          </Carousel>
        </Container>
      </Col>
    </Row>
  );
}
