import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFoundScreen() {
  return (
    <Container style={{ height: '400px' }}>
      <h3>Page not found</h3>
      <Link to='/'>Go back to Home page</Link>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}
