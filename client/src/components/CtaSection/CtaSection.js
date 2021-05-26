import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CtaSection.module.sass';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <div className={styles.section}>
      <h3>Ready to get started?</h3>
      <p>Fill out your contest brief and begin receiving custom name suggestions within minutes.</p>
      <Link to='/'><Button className={styles.button}>Start A Contest</Button></Link>
    </div>
  );
}

export default CtaSection;
