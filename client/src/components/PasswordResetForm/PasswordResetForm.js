import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { refreshPassword } from '../../actions/actionCreator';
import Schems from '../../validators/validationSchems';
import styles from './PasswordResetForm.module.sass';
import InputField from '../InputField/InputField';
import { Link } from 'react-router-dom';

const PasswordResetForm = () => {
  const dispatch = useDispatch();

  const Submit = data => {
    dispatch(refreshPassword(data))
    alert("Подтвердите изменения пароля перейдя по ссылке в письме отправленном на указаную почту.")
  }

  return (
    <div className={ styles.loginForm }>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={Submit}
        validationSchema={Schems.LoginSchem}
      >
        <Form>
          <h1>
          FORGOT PASSWORD
          </h1>
          <Field name={'email'}>
            {fieldProps => <InputField placeholder='Email adress' {...fieldProps} />}
          </Field>

          <Field name={'password'}>
            {fieldProps => <InputField type='password' placeholder='New password' {...fieldProps} />}
          </Field>

          <Field
            type='submit'
            name='submit'
            className={styles.submitContainer}
          />
        </Form>
      </Formik>
      <Link to='/login' style={{ textDecoration: 'none' }}>
        <div className={styles.linkLoginContainer}>
          <span>Back</span>
        </div>
      </Link>
    </div>
  );
};

export default PasswordResetForm;
