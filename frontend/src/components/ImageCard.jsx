import { Card } from 'react-bootstrap';

const ImageCard = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Img src={product.image} variant='top' />
    </Card>
  );
};

export default ImageCard;
