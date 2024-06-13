import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import { BASE_URL } from '../constants';
import { Row, Col, Container } from 'react-bootstrap';

const CardsContainer = styled.div`
  display: flex;
  height: 65vh;
  align-items: center;
  justify-content: center;
`;

const CardHeader = styled.div`
  height: 30rem;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PriceCircle = styled.div`
  border: 0.5rem solid white;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0.1rem 0.1rem 1rem rgba(19, 20, 19, 0.342);
`;

const PriceText = styled.p`
  font-size: 3rem;
  color: white;
  text-shadow: 0.1rem 0.1rem 1rem rgba(19, 20, 19, 0.342);
`;

const FunClubsPlansScreen = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data: response } = await axios.get(`${BASE_URL}/api/subs/prices`);
    console.log(response);
    setPrices(response.data);
  };

  const createSession = async (priceId) => {
    const { data: response } = await axios.post(
      `${BASE_URL}/api/subs/session`,
      {
        priceId,
      }
    );

    window.location.href = response.url;
  };

  const backgroundColors = {
    Basic: 'rgb(104, 219, 104)',
    Standard: 'rgb(185, 42, 23, 0.835)',
    Premium: 'pink',
  };

  return (
    <Container>
      <Row>
        {prices.map((price, index) => {
          return (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <CardsContainer>
                <Card style={{ width: '18rem', height: '25rem' }}>
                  <CardHeader
                    style={{
                      backgroundColor: backgroundColors[price.nickname],
                    }}
                  >
                    <PriceCircle>
                      <PriceText>${price.unit_amount / 100}</PriceText>
                    </PriceCircle>
                  </CardHeader>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '2rem' }}>
                      {price.nickname}
                    </Card.Title>
                    <Button
                      variant='primary'
                      className='mt-2'
                      onClick={() => createSession(price.id)}
                    >
                      Buy now
                    </Button>
                  </Card.Body>
                </Card>
              </CardsContainer>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default FunClubsPlansScreen;
