import React from 'react';
import AllOfferList from '../../components/AllOfferList/AllOfferList';
import Header from '../../components/Header/Header';
import { Container } from 'react-bootstrap';

const AllOffersPage = () => {
  return (
    <>
      <Header />
      <Container>
        <AllOfferList />
      </Container>
    </>
  );
};

export default AllOffersPage;
