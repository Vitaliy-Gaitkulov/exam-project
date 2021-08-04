import React from 'react';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ClientSection.module.sass';

const ClientSection = () => {
  return (
    <div className={styles.section}>
      <Row>
        <Col className='col-md-5 col-lg-4'>
          <h3>Featured In</h3>
        </Col>
        <Col className='col-md-7 col-lg-8'>
          <Row className={styles.row}>
            <Col className='col-sm-4 col-lg-3'>
              <div className={styles.wrapper_link}>
                <a href='https://www.forbes.com/'>
                  <img
                    src='https://www.squadhelp.com/resources/assets/imgs/front/forbes.svg'
                    alt='forbes'
                  />
                </a>
              </div>
            </Col>
            <Col className='col-sm-4 col-lg-3'>
              <div className={styles.wrapper_link}>
                <a href='https://thenextweb.com/'>
                  <img
                    src='https://www.squadhelp.com/resources/assets/imgs/front/TNW.svg'
                    alt='TNW'
                  />
                </a>
              </div>
            </Col>
            <Col className='col-sm-4 col-lg-3'>
              <div className={styles.wrapper_link}>
                <a href='https://www.chicagotribune.com/'>
                  <img
                    src='https://www.squadhelp.com/resources/assets/imgs/front/chicago.svg'
                    alt='chicago'
                  />
                </a>
              </div>
            </Col>
            <Col className='col-sm-4 col-lg-3'>
              <div className={styles.wrapper_link}>
                <a href='https://mashable.com/'>
                  <img
                    src='https://www.squadhelp.com/resources/assets/imgs/front/Mashable.svg'
                    alt='Mashable'
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ClientSection;
