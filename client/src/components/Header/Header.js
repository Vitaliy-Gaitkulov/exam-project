import React from 'react';
import styles from './Header.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import CONSTANTS from '../../constants';
import { clearUserStore } from '../../actions/actionCreator';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = props => {
  const { auth, isFetching } = useSelector(state => state);
  const dispatch = useDispatch();
  const logOut = () => {
    props.history.replace('/login');
    dispatch(clearUserStore());
  };
  const renderLoginButtons = () => {
    if (auth.user) {
      return (
        <>
          <div className={styles.userInfo}>
            <img
              src={
                auth.user.avatar
                  ? `${CONSTANTS.publicURL}${auth.user.avatar}`
                  : CONSTANTS.ANONYM_IMAGE_PATH
              }
              alt='user'
            />
            <span>{`Hi, ${auth.user.displayName}`}</span>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
              alt='menu'
            />
            <ul>
              <li>
                <Link to='/dashboard'>View Dashboard</Link>
              </li>
              <li>
                <Link to='/account'>My Account</Link>
              </li>

              {auth.user && auth.user.role !== CONSTANTS.CREATOR && (
                <li>
                  <Link to='/events'>Events</Link>
                </li>
              )}
              <li>
                <Link to='#'>Messages</Link>
              </li>
              <li>
                <Link to='#'>Affiliate Dashboard</Link>
              </li>
              <li>
                <a onClick={logOut}>Logout</a>
              </li>
            </ul>
          </div>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`}
            className={styles.emailIcon}
            alt='email'
          />
        </>
      );
    } else {
      return (
        <>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <span className={styles.btn}>LOGIN</span>
          </Link>
          <Link to='/registration' style={{ textDecoration: 'none' }}>
            <span className={styles.btn}>SIGN UP</span>
          </Link>
        </>
      );
    }
  };

  return (
    <>
      {!isFetching && (
        <div className={styles.headerContainer}>
          <Container>
            <div className={styles.loginSignnUpHeaders}>
              <div className={styles.numberContainer}>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`}
                  alt='phone'
                />
                <a href='tel:(877)355-3585'>(877)&nbsp;355-3585</a>
              </div>
              <div className={styles.userButtonsContainer}>
                {renderLoginButtons()}
              </div>
            </div>
            <div className={styles.navContainer}>
              <Link to='/'>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
                  className={styles.logo}
                  alt='blue_logo'
                />
              </Link>
              <div className={styles.leftNav}>
                <div className={styles.nav}>
                  <ul>
                    <li>
                      <span>Contests</span>
                      <img
                        src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                        alt='menu'
                      />
                      <ul>
                        <li>
                          <a href='#'>How it works</a>
                        </li>
                        <li>
                          <a href='#'>Pricing</a>
                        </li>
                        <li>
                          <a href='#'>Agency Service</a>
                        </li>
                        <li>
                          <a href='#'>Active Contests</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Names For Sale</span>
                      <img
                        src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                        alt='menu'
                      />
                      <ul>
                        <li>
                          <a href='#'>Popular Names</a>
                        </li>
                        <li>
                          <a href='#'>Limited Time Discounts</a>
                        </li>
                        <li>
                          <a href='#'>By Category</a>
                        </li>
                        <li>
                          <a href='#'>By Type</a>
                        </li>
                        <li>
                          <a href='#'>Visual Name Search</a>
                        </li>
                        <li>
                          <a href='#'>For Sellers</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Our Work</span>
                      <img
                        src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                        alt='menu'
                      />
                      <ul>
                        <li>
                          <a href='#'>Names</a>
                        </li>
                        <li>
                          <a href='#'>Taglines</a>
                        </li>
                        <li>
                          <a href='#'>Logos</a>
                        </li>
                        <li className={styles.last}>
                          <a href='#'>Testimonials</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Resourses</span>
                      <img
                        src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                        alt='menu'
                      />
                      <ul>
                        <li>
                          <a href='#'>Name Ideas</a>
                        </li>
                        <li>
                          <a href='#'>Business Name Generator</a>
                        </li>
                        <li>
                          <a href='#'>Audience Testing Service</a>
                        </li>
                        <li>
                          <a href='#'>Video Creation Service</a>
                        </li>
                        <li>
                          <a href='#'>Trademark Filling Service</a>
                        </li>
                        <li>
                          <a href='#'>Startup Resurses</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <span>Blog</span>
                      <img
                        src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                        alt='menu'
                      />
                      <ul>
                        <li>
                          <a href='#'>Naming A Business</a>
                        </li>
                        <li>
                          <a href='#'>Validation & Testing</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {auth.user && auth.user.role === CONSTANTS.CUSTOMER && (
                  <div className={styles.wrapperButton}>
                    <Button
                      variant='primary'
                      className={styles.startContestBtn}
                    >
                      <Link to='/startContest'>Start Contest</Link>
                    </Button>
                  </div>
                )}
                {auth.user && auth.user.role === CONSTANTS.MODERATOR && (
                  <div className={styles.wrapperButton}>
                    <Button
                      variant='primary'
                      className={styles.startContestBtn}
                    >
                      <Link to='/allOffers'>All Offers</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default withRouter(Header);
