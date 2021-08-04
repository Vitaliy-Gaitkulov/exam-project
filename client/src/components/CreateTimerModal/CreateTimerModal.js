import React from 'react';
import { Modal } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import { format } from 'date-fns';
import styles from './CreateTimerModal.module.sass';

const CreateTimerModal = props => {
  const { Submit } = props;

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Create Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: '',
            date: new Date(),
          }}
          onSubmit={Submit}
        >
          <Form>
            <div className={styles.wrapper_field}>
              <span>Name event</span>
              <div>
                <Field name={'name'} />
              </div>

              <span>Сhoose time</span>
              <div>
                <Field
                  name={'date'}
                  type='datetime-local'
                  min={`${format(new Date(), "yyyy-MM-dd'T'HH:mm")}`}
                  required
                />
              </div>
              <Field type='submit' value='Submit' />
            </div>
          </Form>
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default CreateTimerModal;
