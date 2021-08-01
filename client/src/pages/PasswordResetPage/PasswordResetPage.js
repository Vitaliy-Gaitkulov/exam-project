import React from 'react';
import { useDispatch } from 'react-redux';
import PasswordResetForm from '../../components/PasswordResetForm/PasswordResetForm';
import { updatePasswordAction } from '../../actions/actionCreator';
import styles from './PasswordResetPage.module.sass';

const PasswordResetPage = props => {
  const dispatch = useDispatch();

  const {
    params: { hash },
  } = props.match;

  if(hash){
    dispatch(updatePasswordAction(hash));
    props.history.replace('/login');
  }

  return (
    <div className={styles.container}>
      <PasswordResetForm />
    </div>
  );
};

export default PasswordResetPage;
