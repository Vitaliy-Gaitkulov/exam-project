import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOffersAction } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import ModerationOfferBox from '../ModerationOfferBox/ModerationOfferBox';
import styles from './AllOfferList.module.sass';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AllOfferList = () => {
  const dispatch = useDispatch();
  const {
    moderation: { offers, paginateCount },
  } = useSelector(state => state);
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const getData = () => {
    dispatch(getAllOffersAction({ limit: 10, offset: (page - 1) * 10 }));
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const arr = [];
  const allOffers = () => {
    if (offers) {
      offers.map((value, i) => {
        if (value.status === CONSTANTS.OFFER_STATUS_MODERATION) {
          return arr.push(
            <ModerationOfferBox callback={getData} key={i} offerData={value} />
          );
        }
      });
    }
    return arr;
  };

  return (
    <>
      <div className={styles.container}>
        <>{allOffers()}</>
      </div>
      <div className={classes.root}>
        <div className={styles.paginationWrapper}>
          {paginateCount != 0 && (
            <Pagination
              count={Math.ceil(paginateCount / 10)}
              page={page}
              onChange={handleChange}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AllOfferList;
