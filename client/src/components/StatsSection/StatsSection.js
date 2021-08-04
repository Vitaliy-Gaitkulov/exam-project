import React from 'react';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './StatsSection.module.sass';

const StatsSection = () => {
  return (
    <div className={styles.section}>
      <Row>
        <Col md={4} sm={12}>
          <div className={styles.wrapper}>
            <div className={styles.slash}>
              <img
                src='https://www.squadhelp.com/resources/assets/imgs/front/stars.svg'
                alt='stars.svg'
              />
              <p>
                <span> 4.9 out of 5 stars </span> from 25,000+ customers.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4} sm={12}>
          <div className={styles.wrapper}>
            <div className={styles.slash}>
              <img
                src='https://www.squadhelp.com/resources/assets/imgs/front/img2(1).png'
                alt='squadhelp'
              />
              <p>
                Our branding community stands <span> 200,000+ </span> strong.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4} sm={12}>
          <div className={styles.wrapper}>
            <img
              src='https://www.squadhelp.com/resources/assets/imgs/front/sharing-files.svg'
              alt='sharing-files.svg'
            />
            <p>
              <span>140+ Industries</span> supported across more than
              <span> 85 countries </span>
              <br /> – and counting.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StatsSection;
