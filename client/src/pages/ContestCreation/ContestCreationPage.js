import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styles from './ContestCreationPage.module.sass';
import { saveContestToStore } from '../../actions/actionCreator';
import NextButton from '../../components/NextButton/NextButton';
import ContestForm from '../../components/ContestForm/ContestForm';
import BackButton from '../../components/BackButton/BackButton';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const ContestCreationPage = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { contestStore, bundleStore } = useSelector(state => state);

  const submitDataContest = values => {
    dispatch(saveContestToStore({ type: props.contestType, info: values }));
    history.push(
      bundleStore.bundle[props.contestType] === 'payment'
        ? '/payment'
        : bundleStore.bundle[props.contestType] + 'Contest'
    );
  };

  !bundleStore.bundle && history.replace('/startContest');
  const contestData = contestStore.contests[props.contestType]
    ? contestStore.contests[props.contestType]
    : { contestType: props.contestType };
  return (
    <div>
      <Header />
      <div className={styles.startContestHeader}>
        <div className={styles.startContestInfo}>
          <h2>{props.title}</h2>
          <span>
            Tell us a bit more about your business as well as your preferences
            so that creatives get a better idea about what you are looking for
          </span>
        </div>
        <ProgressBar currentStep={2} />
      </div>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <ContestForm
            contestType={props.contestType}
            submitData={submitDataContest}
            defaultData={contestData}
          />
        </div>
      </div>
      <div className={styles.footerButtonsContainer}>
        <div className={styles.lastContainer}>
          <div className={styles.buttonsContainer}>
            <BackButton />
            <NextButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContestCreationPage;
