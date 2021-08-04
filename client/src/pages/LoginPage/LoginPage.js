import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo';
import styles from './LoginPage.module.sass';
import { clearUserStore } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';

const LoginPage = props => {
  const dispatch = useDispatch();
  dispatch(clearUserStore());
  const changeRoute = () => {
    props.history.replace('/');
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.headerSignUpPage}>
          <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt='logo' />
          <Link to='/registration' style={{ textDecoration: 'none' }}>
            <div className={styles.linkLoginContainer}>
              <span>Signup</span>
            </div>
          </Link>
        </div>
        <div className={styles.loginFormContainer}>
          <LoginForm changeRoute={changeRoute} />
        </div>
        <div className={styles.password_reset}>
          <Link to='/password_reset' style={{ textDecoration: 'none' }}>
            <span>Forgot password</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
