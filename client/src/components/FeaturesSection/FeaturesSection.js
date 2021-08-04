import React from 'react';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CONSTANTS from '../../constants';
import styles from './FeaturesSection.module.sass';

const FeaturesSection = () => {
  return (
    <div className={styles.section}>
      <Row>
        <Col md={12}>
          <div className={styles.header_wrapper}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}how_it_works_page/cup.png`}
              alt="cup.png"
            />
            <h2>How Do Naming Contests Work?</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{span: 12,order: "last"}} lg={{span: 6, order: "first"}} >
          <div className={styles.image_wrapper}>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}how_it_works_page/how_do_naming_cw.png`}
              alt="how_do_naming_cw.png"
            />
          </div>
        </Col>
        <Col  md={{span: 12,order: "first"}} lg={{span: 6, order: "last"}} >
          <div className={styles.ul_wrapper}>
            <ul>
              <li>
                <div>
                  <span>1.</span>
                  <p>
                    Fill out your Naming Brief and begin receiving name ideas in
                    minutes
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <span>2.</span>
                  <p>
                    Rate the submissions and provide feedback to creatives.
                    Creatives submit even more names based on your feedback.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <span>3.</span>
                  <p>
                    Our team helps you test your favorite names with your target
                    audience. We also assist with Trademark screening.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <span>4.</span>
                  <p>
                    Pick a Winner. The winner gets paid for their submission.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturesSection;
