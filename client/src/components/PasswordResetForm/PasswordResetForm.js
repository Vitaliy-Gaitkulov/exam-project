import React from 'react';
import {Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import {refreshPassword} from '../../actions/actionCreator';
import styles from './PasswordResetForm.module.sass'

const PasswordResetForm = () => {

  const dispatch = useDispatch()
  

  return (
    <div>
      <Formik
       initialValues={{ email: '', password: '' }}
       onSubmit={data =>dispatch(refreshPassword(data))}
       >
        <Form>
          <div className={styles.wrapper_field}>
          <Field type='email' name='email'/>
          <Field type='password' name='password'/>
          <Field type='submit' name='submit'/></div>
        </Form>
      </Formik>
    </div>
  );
};

export default PasswordResetForm;
