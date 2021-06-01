import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { differenceInSeconds, formatDistanceStrict } from 'date-fns';
import { Container } from 'react-bootstrap';
import styles from './EventDashboard.module.sass';
import cx from 'classnames';
import CreateTimerModal from '../CreateTimerModal/CreateTimerModal';

const DATE_EVENT_SCHEMA = Yup.object({
  name: Yup.string().required(),
  //date: Yup.date()
});

const EventDashboard = () => {
  const initialState = () =>
    JSON.parse(window.localStorage.getItem('stateStorage')) || [{}];

  const [data, setDate] = useState(initialState);
  const [state, setState] = useState();
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(
    () => window.localStorage.setItem('stateStorage', JSON.stringify(data)),
    [data]
  );

  useEffect(() => {
    const updateTimer = window.setInterval(() => {
      setState(setTimer());
    }, 1000);
    return () => {
      window.clearInterval(updateTimer);
    };
  }, []);

  const clearTimer = event => {
    const filteredData = data.filter((currentItem, index) => {
      return index !== Number(event.currentTarget.parentElement.dataset.id);
    });
    setDate(filteredData);
  };

  const Submit = value => {
    setDate([
      ...data,
      { name: value.name, createdAt: new Date(), date: value.date },
    ]);
  };

  const differenceHelper = (firstValue, secondValue) => {
    return Math.abs((100 / firstValue) * secondValue - 100) > 100
      ? 100
      : Math.abs((100 / firstValue) * secondValue - 100);
  };

  const timeRenderHelper = (distance, date) => {
    if (distance !== 100) {
      return formatDistanceStrict(new Date(date), new Date());
    }
    return 'time is over';
  };

  const setTimer = () => {
    if (data !== null) {
      const arr = data.map((value, index) => {
        const { name, date, createdAt } = value;

        if (date !== undefined) {
          const firstDifference = differenceInSeconds(
            new Date(date),
            new Date(createdAt)
          );

          const secondDifference = differenceInSeconds(
            new Date(date),
            new Date()
          );

          const timer = differenceHelper(firstDifference, secondDifference);
          const final = timeRenderHelper(timer, date);
          const badgeNotify = cx({
            [styles.notify_false]: final !== 'time is over',
            [styles.notify_true]: final === 'time is over',
          });

          return (
            <li key={`${index}`} data-id={`${index}`}>
              <div
                className={styles.indicator}
                style={{
                  width: `${timer}%`,
                }}
              ></div>
              <div className={styles.indicator_info}>
                <h5>{name}</h5>
                <span>{final}</span>
              </div>
              <div className={badgeNotify} onClick={clearTimer}></div>
            </li>
          );
        }
      });
      const sortArr = arr.sort((a, b) => {
        if (a.props.children[0].props.style.width.split('%')[0] === '100') {
          return -1;
        } else if (
          b.props.children[0].props.style.width.split('%')[0] === '100'
        ) {
          return 1;
        } else if (
          Number(a.props.children[0].props.style.width.split('%')[0]) >
          Number(b.props.children[0].props.style.width.split('%')[0])
        ) {
          return -1;
        }
        return 1;
      });
      return sortArr;
    }
  };
  const initialValues = {
    name: '',
    date: new Date(),
  };
  return (
    <>
      <Container>
        <div className={styles.container}>
          
          <div className={styles.wrapper_list_item}>
            <div className={styles.wrapper_header_list}>
              <h2>Live upcomming checks</h2>
              <span>Remaining time</span>
            </div>
            <ul className={styles.wrapper_ul}>{setTimer()}</ul>
            <div className={styles.create_timer} onClick={() => setModalShow(true)}></div>
            <CreateTimerModal
            Submit={Submit}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default EventDashboard;
