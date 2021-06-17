import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import PasswordResetForm from '../../components/PasswordResetForm/PasswordResetForm'
import styles from './PasswordResetPage.module.sass'

const PasswordResetPage = () => {
  const dispatch = useDispatch()
  const {} = useSelector(state => state)

  return (
    <div className={styles.container}>
      <PasswordResetForm/>
    </div>
  );
}

export default PasswordResetPage;
