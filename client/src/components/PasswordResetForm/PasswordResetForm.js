import React from 'react';
import {Formik, Form, Field } from 'formik';
import styles from './PasswordResetForm.module.sass'

const PasswordResetForm = () => {
  return (
    <div>
      <Formik
       initialValues={{ email: '', password: '' }}
       onSubmit={(bag) =>{console.log(bag);}}
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
