import React from 'react';
import { Container } from 'react-bootstrap';
import EventDashboard from '../../components/EventDashboard/EventDashboard';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const EventsPage = () => {
  return (
    <>
      <Header />
      <EventDashboard />
    </>
  );
};

export default EventsPage;
