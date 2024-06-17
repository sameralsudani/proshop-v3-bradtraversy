import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import { BASE_URL } from '../constants';
import { Row, Col, Container } from 'react-bootstrap';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';
import ForgotPasswordModal from '../components/ForgotPasswordModal';
import { useSelector } from 'react-redux';
import { useGetArticlesQuery } from '../slices/articlesApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from 'react-router-dom';

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

const FunClubSubScreen = () => {
  const [prices, setPrices] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);

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

  const { data, isLoading, error, refetch } = useGetArticlesQuery({});
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Container>
      <h2>Fun Club</h2>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <>
          {!userInfo && (
            <>
              <h3>Please login first</h3>
              <Button
                onClick={() => {
                  setModalShow(true);
                }}
              >
                Please login
              </Button>
            </>
          )}

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
                          disabled={!userInfo}
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
        </>
      ) : data.length && userInfo ? (
        <>
          <Row>
            {data.map((article, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <Card className='my-3 p-3 rounded'>
                  <Link to=''>
                    <Card.Img src={article.imageUrl} variant='top' />
                  </Link>

                  <Card.Body>
                    <Link to=''>
                      <Card.Title as='div' className='book-title'>
                        <strong>{article.title}</strong>
                      </Card.Title>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <>
          {!userInfo && (
            <>
              <h3>Please login first</h3>
              <Button
                onClick={() => {
                  setModalShow(true);
                }}
              >
                Please login
              </Button>
            </>
          )}

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
                          disabled={!userInfo}
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
        </>
      )}

      <LoginModal
        show={modalShow}
        onHide={(value) => setModalShow(value)}
        openSignUpModal={(value) => setModalShow2(value)}
        openForgotPasswordModal={(value) => setModalShow3(value)}
        refetch={() => refetch()}
        isClub={true}
      />
      <SignUpModal
        show={modalShow2}
        onHide={(value) => setModalShow2(value)}
        openLoginModal={(value) => setModalShow(value)}
        refetch={() => refetch()}
        isClub={true}
      />
      <ForgotPasswordModal
        show={modalShow3}
        onHide={(value) => setModalShow3(value)}
      />
    </Container>
  );
};

export default FunClubSubScreen;
