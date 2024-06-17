import './CarouselContainer.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Grade from './Grade';
import { gradeData, responsive } from './data';
import { Row, Col, Button, Container } from 'react-bootstrap';

export default function CarouselContainer() {
  const grade = gradeData.map((item, index) => (
    <Grade
      key={index}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <Row className='grade-container mt-5 mb-5'>
      <Col xs={12} md={12} lg={2} className='shop-now'>
        <div className='shop-now-title'>Classroom Libraries</div>
        <div className='shop-now-description'>
          Create a Community of Readers in Your Classroom
        </div>
        <Button className='hero-btn'>SHOP NOW</Button>
      </Col>
      <Col xs={12} md={12} lg={10} className='carousel-container'>
        <Container>
          <Carousel styel={{ zIndex: '10' }} responsive={responsive}>
            {grade}
          </Carousel>
        </Container>
      </Col>
    </Row>
  );
}
