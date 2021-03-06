import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actFetchSuggestedUsersRequest,
  actSendFollowerRequest,
} from 'store/actions';
import SuggestedUsers from 'components/Explore/Suggestion/SuggestedUsers';

function SuggestedUsersContainer(props) {
  const suggestedUsers = useSelector((state) => state.users.suggestion);
  const token = useSelector((state) => state.token.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('token');
    dispatch(actFetchSuggestedUsersRequest());
  }, [dispatch, token]);

  function handleClickFollowButton(id) {
    dispatch(actSendFollowerRequest(id));
  }

  return (
    <SuggestedUsers
      users={suggestedUsers}
      handleClickFollowButton={handleClickFollowButton}
    />
  );
}

export default SuggestedUsersContainer;
