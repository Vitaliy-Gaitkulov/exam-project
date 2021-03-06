import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chat from '../Chat/Chat';

const ChatContainer = props => {
  const { user, isShow } = useSelector(({ auth, chatStore }) => ({
    user: auth.user,
    isShow: chatStore.isShow,
  }));

  const dispatch = useDispatch();

  const ref = useRef();

  const handler = useCallback(
    event => {
      if (isShow === true && !ref.current.contains(event.target)) {
        dispatch({ type: 'CHANGE_CHAT_SHOW', data: false });
      }
    },
    [isShow]
  );

  useEffect(() => {
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, [isShow]);

  return user && <Chat innerRef={ref} />;
};

export default ChatContainer;
