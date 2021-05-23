import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import styles from './HowDoesSquadhelp.module.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import CONSTANTS from '../../constants';


const HowDoesSquadhelp = () => {
  return (
    <Row className={styles.row}>
      <Col xs={7}>
        <div className={styles.content_wrapper}>
          <span className={styles.span}>World's #1 Naming Platform</span>
          <h1>How Does Squadhelp Work?</h1>
          <p>
            Squadhelp helps you come up with a great name for your business by
            combining the power of crowdsourcing with sophisticated technology
            and Agency-level validation services.
          </p>
          <Button variant='primary' className={styles.button}><div className={styles.btn_icon}><i className='fas fa-play' /></div> Play Video</Button>
        </div>
      </Col>
      <Col xs={5}>
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}how_it_works_page/how_does_squadhelp.png`}
          alt='globe'
        />
      </Col>
    </Row>
  );
};

export default HowDoesSquadhelp;
