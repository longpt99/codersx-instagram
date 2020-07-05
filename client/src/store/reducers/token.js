import * as types from '../../constants/ActionType';

const getToken = localStorage.getItem('access_token');
let initialState = getToken ? getToken : null;

const tokenReducer = (state = initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case types.SET_TOKEN: return payload;
    case types.DELETE_TOKEN: return null;
    default: return state;
  }
};

export default tokenReducer;
