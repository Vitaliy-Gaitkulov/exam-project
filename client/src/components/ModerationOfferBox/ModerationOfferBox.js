import React from 'react';
import styles from './ModerationOfferBox.module.sass';
import { Button } from 'react-bootstrap';
import { setOfferStatusModeration } from '../../actions/actionCreator';
import { useDispatch} from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'
import CONSTANTS from '../../constants';

const ModerationOfferBox = props => {

  const dispatch = useDispatch();
  const {
    callback,
    offerData: {
      id,
      status,
      text,
      fileName,
      user,
      user: { avatar, firstName, lastName, email },
    },
  } = props;

  const setOfferStatusFunc = (creatorId, offerId, command) => {
    const obj = {
      command,
      offerId,
      creatorId,
      email
    };
    dispatch(setOfferStatusModeration(obj));
    callback()
  };

  const resolveOffer = () => {
    confirmAlert({
      title: 'confirm',
      message: 'Are u sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>
            setOfferStatusFunc(user.id, id, 'pending')
        },
        {
          label: 'No'
        }
      ]
    })
  }

  const rejectOffer = () => {
    confirmAlert({
      title: 'confirm',
      message: 'Are u sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>
          setOfferStatusFunc(user.id, id, 'banned')
        },
        {
          label: 'No'
        }
      ]
    })
  }

  return (
    <div className={styles.containerList}>
      <div className={styles.wrapperInfo}>
        <div className={styles.creativeInfoContainer}>
          <img
            src={
              avatar
                ? `${CONSTANTS.publicURL}${avatar}`
                : CONSTANTS.ANONYM_IMAGE_PATH
            }
            alt='user'
          />
          <div className={styles.nameAndEmail}>
            <span>{firstName + ' ' + lastName}</span>
            <span>{email}</span>
            <span>status: {status}</span>
          </div>
        </div>
        <div>
          {fileName !== null ? (
            <img
              className={styles.responseLogo}
              src={`${CONSTANTS.publicURL}${fileName}`}
              alt='logo'
            />
          ) : (
            <span className={styles.response}>{text}</span>
          )}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={resolveOffer} variant='success'>resolve</Button>
        <Button onClick={rejectOffer} variant='danger'>reject</Button>
      </div>
    </div>
  );
};

export default ModerationOfferBox;
