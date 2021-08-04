import React from 'react';
import {
  updateContest,
  changeEditContest,
  clearUpdateContestStore,
} from '../../actions/actionCreator';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ContestForm from '../ContestForm/ContestForm';
import styles from './Brief.module.sass';
import { submit } from 'redux-form';
import ContestInfo from '../Contest/ContestInfo/ContestInfo';
import Error from '../Error/Error';

const Brief = props => {
  const { updateContestStore, auth, isEditContest } = useSelector(state => {
    const { isEditContest } = state.contestByIdStore;
    const { updateContestStore, auth } = state;
    return { updateContestStore, auth, isEditContest };
  });
  const dispatch = useDispatch();
  const submitForm = () => dispatch(submit('contestForm'));
  const changeEdit = data => dispatch(changeEditContest(data));

  const { contestData, role, goChat } = props;
  const { error } = updateContestStore;
  const { id } = auth.user;

  const setNewContestData = values => {
    const data = new FormData();
    Object.keys(values).forEach(key => {
      if (key !== 'file' && values[key]) data.append(key, values[key]);
    });
    if (values.file instanceof File) data.append('file', values.file);
    data.append('contestId', props.contestData.id);
    dispatch(updateContest(data));
  };

  const getContestObjInfo = () => {
    const defaultData = {};

    Object.keys(props.contestData).map(key => {
      if (key.toString() === 'originalFileName') {
        return (defaultData.file = { name: key });
      }
      return (defaultData[key] = key);
    });

    return defaultData;
  };

  if (!isEditContest) {
    return (
      <ContestInfo
        userId={id}
        contestData={contestData}
        changeEditContest={changeEdit}
        role={role}
        goChat={goChat}
      />
    );
  } else {
    return (
      <div className={styles.contestForm}>
        {error && (
          <Error
            data={error.data}
            status={error.status}
            clearError={clearUpdateContestStore}
          />
        )}
        <ContestForm
          contestType={contestData.contestType}
          defaultData={getContestObjInfo()}
          submitData={setNewContestData}
        />
        {isEditContest ? (
          <div onClick={() => submitForm()} className={styles.changeData}>
            Set Data
          </div>
        ) : null}
      </div>
    );
  }
};

export default withRouter(Brief);
