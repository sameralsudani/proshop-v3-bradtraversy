import './CarouselContainer.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Grade from './Grade';
import { productData, responsive } from './data';

export default function CarouselContainer() {
  const product = productData.map((item, index) => (
    <Grade
      key={index}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className='App'>
      <Carousel responsive={responsive}>{product}</Carousel>
    </div>
  );
}
