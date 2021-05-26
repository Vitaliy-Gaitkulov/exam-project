import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import StatsSection from '../../components/StatsSection/StatsSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import ClientSection from '../../components/ClientSection/ClientSection';

const HowItWorksPage = () => {
  return (
    <>
      <Header />
      <Container fluid='lg'>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
      </Container>
      <Container bsPrefix='p-0'>
        <CtaSection />
      </Container>
      <Container fluid='lg'>
        <StatsSection />
        <PricingSection />
        <ClientSection />
      </Container>
      <Footer />
    </>
  );
};

export default HowItWorksPage;
