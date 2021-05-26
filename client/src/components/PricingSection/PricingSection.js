import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPhoneOutgoingOutline } from '@mdi/js';
import styles from './PricingSection.module.sass';

const PricingSection = () => {
  return (
    <div className={styles.section}>
      <Row className={styles.row}>
        <Col className='col-lg-7 col-sm-12 shadow-lg rounded'>
          <div className={styles.left_container}>
            <div className={styles.item_wrapper}>
              <span>
                <i class='fa fa-chevron-right'></i>
              </span>
              <div>
                <h4>Pay a Fraction of cost vs hiring an agency</h4>
                <p>
                  For as low as $199, our naming contests and marketplace allow
                  you to get an amazing brand quickly and affordably.
                </p>
              </div>
            </div>
            <hr />
            <div className={styles.item_wrapper}>
              <span>
                <i class='fa fa-chevron-right'></i>
                <i className='fas fa-phone-alt' />
              </span>
              <div>
                <h3>Satisfaction Guarantee</h3>
                <p>
                  Of course! We have policies in place to ensure that you are
                  satisfied with your experience. <a>Learn more</a>
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col className='col-lg-5 col-sm-12 p-0'>
          <div className={styles.right_container}>
            <h4>Questions?</h4>
            <p>
              Speak with a Squadhelp platform expert to learn more and get your
              questions answered.
            </p>
            <Link className={styles.link}>
              <Button className={styles.button}>Schedule Consultation</Button>
            </Link>
            <span>
              <Icon path={mdiPhoneOutgoingOutline} size={1} />{' '}
              <a>(877) 355-3585</a>
            </span>
            <p>Call us for assistance</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PricingSection;
