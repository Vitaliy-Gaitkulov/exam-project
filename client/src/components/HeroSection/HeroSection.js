import React, { useState } from 'react';
import { Button, Col, Row, Modal } from 'react-bootstrap';
import styles from './HeroSection.module.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import CONSTANTS from '../../constants';

const HeroSection = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.section}>
      <Row>
        <Col  md={12} lg={7} sm={12}>
          <div className={styles.content_wrapper}>
            <span className={styles.span}>World's #1 Naming Platform</span>
            <h1>How Does Squadhelp Work?</h1>
            <p>
              Squadhelp helps you come up with a great name for your business by
              combining the power of crowdsourcing with sophisticated technology
              and Agency-level validation services.
            </p>
            <Button
              variant='primary'
              className={styles.button}
              onClick={() => setShow(true)}
            >
              <div className={styles.btn_icon}>
                <i className='fas fa-play' />
              </div>
              Play Video
            </Button>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName={styles.modal}
            >
              <div className={styles.modal_body}>
                <iframe
                  width='1200'
                  height='600'
                  src='https://www.youtube.com/embed/33Fk6QocUEk'
                />
              </div>
            </Modal>
          </div>
        </Col>
        <Col sm={0} md={0} lg={5} >
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}how_it_works_page/how_does_squadhelp.png`}
            alt='globe'
          />
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
