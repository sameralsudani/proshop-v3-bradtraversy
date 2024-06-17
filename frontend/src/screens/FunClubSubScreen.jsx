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

const FunClubSubScreen = () => {
  const [prices, setPrices] = useState([]);
  console.log('🚀 ~ FunClubSubScreen ~ prices:', prices);

  const imageUrls = [
    'http://res.cloudinary.com/drrpl4bzt/image/upload/v1718659723/keydvvhoczh5p3uwjulx.png',
    'http://res.cloudinary.com/drrpl4bzt/image/upload/v1718659810/srgpawy826xjesiamwqi.png',
    'http://res.cloudinary.com/drrpl4bzt/image/upload/v1718659691/cre94prqzg7culribyoa.png',
  ];

  let prices2 = prices.map((price, index) => {
    return {
      ...price,
      imageUrl: imageUrls[index],
    };
  });

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
            {prices2.map((price, index) => {
              return (
                <Col key={index} sm={12} md={6} lg={4} xl={3}>
                  <Card className='my-3 p-3 rounded'>
                    <Card.Img src={price.imageUrl} variant='top' />

                    <Card.Body>
                      <Card.Title as='div' className='book-title'>
                        <strong>{price.nickname}</strong>
                      </Card.Title>

                      <Card.Text as='h3'>${price.unit_amount / 100}</Card.Text>
                      <Button
                        onClick={createSession(price.id)}
                        disabled={!userInfo}
                      >
                        SHOP NOW
                      </Button>
                    </Card.Body>
                  </Card>
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
            {prices2.map((price, index) => {
              return (
                <Col key={index} sm={12} md={6} lg={4} xl={3}>
                  <Card className='my-3 p-3 rounded'>
                    <Card.Img src={price.imageUrl} variant='top' />

                    <Card.Body>
                      <Card.Title as='div' className='book-title'>
                        <strong>{price.nickname}</strong>
                      </Card.Title>

                      <Card.Text as='h3'>${price.unit_amount / 100}</Card.Text>
                      <Button
                        onClick={createSession(price.id)}
                        disabled={!userInfo}
                      >
                        SHOP NOW
                      </Button>
                    </Card.Body>
                  </Card>
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
