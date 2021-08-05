import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './DomainButtonGroup.module.sass';
import cx from 'classnames'

const DomainButtonGroup = props => {
  const { btnGroupActive, setButtonGroup } = props;
  
  const stylesButton = cx(styles.row, {
    [styles.active_asname]: btnGroupActive === 'asname',
    [styles.active_yes]: btnGroupActive === 'yes',
    [styles.active_no]: btnGroupActive === 'no',
  })


  return (
    <Container>
      <Row>
        <div className={styles.content_wrapper}>
          <h5>Do you want a matching domain (.com URL) with your name?</h5>
          <span>
            If you want a matching domain, our platform will only accept those
            name suggestions where the domain is available. (Recommended)
          </span>
        </div>
      </Row>
      <div className={stylesButton}>
        <Row>
          <Col md={4}>
            <div
              className={styles.check_asname}
              onClick={() => setButtonGroup('asname')}
            >
              <span>yes</span>
              <div>The Domain should exactly match the name</div>
            </div>
          </Col>
          <Col md={4}>
            <div
              className={styles.check_yes}
              onClick={() => setButtonGroup('yes')}
            >
              <span>yes</span>
              <div>
                But minor variations are allowed <br /> (Recommended)
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div
              className={styles.check_no}
              onClick={() => setButtonGroup('no')}
            >
              <span>no</span>
              <div>I am only looking for a name, not a Domain</div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default DomainButtonGroup;
