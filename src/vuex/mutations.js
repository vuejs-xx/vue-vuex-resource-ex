/* eslint-disable no-param-reassign,no-shadow */
export const increase = (state) => {
  state.count += 1;
};

export const decrease = (state) => {
  state.count -= 1;
};

export const FETCH_POSTS_REQUEST = (state) => {
  state.status = 'request';
};

export const FETCH_POSTS_SUCCESS = (state, res) => {
  state.status = 'success';
  state.infos = res;
};

export const FETCH_POSTS_FAILURE = (state) => {
  state.status = 'failuer';
};
/* eslint-enable no-param-reassign,no-shadow */

