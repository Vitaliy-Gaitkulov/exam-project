import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PasswordResetForm from '../../components/PasswordResetForm/PasswordResetForm';
import { updatePasswordAction } from '../../actions/actionCreator';
import styles from './PasswordResetPage.module.sass';

const PasswordResetPage = props => {
  const dispatch = useDispatch();
  const {} = useSelector(state => state);

  const {
    params: { hash },
  } = props.match;

  console.log(hash);

  if(hash){
    dispatch(updatePasswordAction(hash));
    props.history.replace('/');
  }

  return (
    <div className={styles.container}>
      <PasswordResetForm />
    </div>
  );
};

export default PasswordResetPage;
