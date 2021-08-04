import React from 'react';
import { Button, Col, Row} from 'react-bootstrap';
import styles from './ServicesSection.module.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import CONSTANTS from '../../constants';

const ServicesSection = () => {
  return (
    <div className={styles.section}>
      <Row>
        <Col xs={12}>
          <div className={styles.content_wrapper}>
            <span className={styles.span}>Our Services</span>
            <h2>3 Ways To Use Squadhelp</h2>
            <p>
              Squadhelp offers 3 ways to get you a perfect name for your
              business.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4}>
          <div className={styles.card}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}how_it_works_page/launch_contest.png`}
              alt="launch_contest.png"
            />
            <h3>Launch a Contest</h3>
            <p>
              Work with hundreds of creative experts to get custom name
              suggestions for your business or brand. All names are auto-checked
              for URL availability.
            </p>
            <Button variant='primary'className={styles.button}>Launch a Contest</Button>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className={styles.card}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}how_it_works_page/explore_names.png`}
              alt="explore_names.png"
            />
            <h3>Explore Names For Sale</h3>
            <p>
              Our branding team has curated thousands of pre-made names that you
              can purchase instantly. All names include a matching URL and a
              complimentary Logo Design
            </p>
            <Button variant='primary' className={styles.button}>Explore Names For Sale</Button>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className={styles.card}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}how_it_works_page/agencylevel_managet.png`}
              alt="agencylevel_managet.png"
            />
            <h3>Agency-level Managed Contests</h3>
            <p>
              Our Managed contests combine the power of crowdsourcing with the
              rich experience of our branding consultants. Get a complete
              agency-level experience at a fraction of Agency costs
            </p>
            <Button variant='primary' className={styles.button}>Learn More</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesSection;
