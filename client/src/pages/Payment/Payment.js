import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { payRequest, clearPaymentStore } from '../../actions/actionCreator';
import PayForm from '../../components/PayForm/PayForm';
import styles from './Payment.module.sass';
import isEmpty from 'lodash/isEmpty';
import CONSTANTS from '../../constants';
import Error from '../../components/Error/Error';

const Payment = props => {
  const { payment, contestStore } = useSelector(state => ({
    payment: state.payment,
    contestStore: state.contestStore,
  }));
  const dispatch = useDispatch();
  const clearPaymentStore = () => dispatch(clearPaymentStore());

  const pay = values => {
    const { contests } = contestStore;
    const contestArray = [];
    Object.keys(contests).forEach(key => contestArray.push(contests[key]));
    const { number, expiry, cvc } = values;
    const data = new FormData();
    for (let i = 0; i < contestArray.length; i++) {
      data.append('files', contestArray[i].file);
      contestArray[i].haveFile = !!contestArray[i].file;
    }
    data.append('number', number);
    data.append('expiry', expiry);
    data.append('cvc', cvc);
    data.append('contests', JSON.stringify(contestArray));
    data.append('price', '100');
    dispatch(
      payRequest({
        formData: data,
      })
    );
  };

  const goBack = () => {
    props.history.goBack();
  };

  const { contests } = contestStore;
  const { error } = payment;
  if (isEmpty(contests)) {
    props.history.replace('startContest');
  }
  return (
    <div>
      <div className={styles.header}>
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
          alt='blue-logo'
        />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.paymentContainer}>
          <span className={styles.headerLabel}>Checkout</span>
          {error && (
            <Error
              data={error.data}
              status={error.status}
              clearError={clearPaymentStore}
            />
          )}
          <PayForm sendRequest={pay} back={goBack} isPayForOrder={true} />
        </div>
        <div className={styles.orderInfoContainer}>
          <span className={styles.orderHeader}>Order Summary</span>
          <div className={styles.packageInfoContainer}>
            <span className={styles.packageName}>Package Name: Standard</span>
            <span className={styles.packagePrice}>$100 USD</span>
          </div>
          <div className={styles.resultPriceContainer}>
            <span>Total:</span>
            <span>$100.00 USD</span>
          </div>
          <a href='http://www.google.com'>Have a promo code?</a>
        </div>
      </div>
    </div>
  );
};

export default Payment;
