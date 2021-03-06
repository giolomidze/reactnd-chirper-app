import { getInitalData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveTweets } from '../actions/tweets';
import { setAuthedUser } from '../actions/authedUser';

export const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
  return dispatch => {
    return getInitalData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
