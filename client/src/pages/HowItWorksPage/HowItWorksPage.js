import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HowDoesSquadhelp from '../../components/HowDoesSquadhelp/HowDoesSquadhelp';
import styles from './HowItWorksPage.module.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

const HowItWorksPage = () => {
  return (
    <>
      <Header />
      <Container>
        <HowDoesSquadhelp/>
      </Container>
      <Footer />
    </>
  );
};

export default HowItWorksPage;
