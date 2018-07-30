import { takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import { LOGIN } from './constants';
import { selectEmail, selectPassword } from './selectors';

export function* login() {
  //
  const email = yield select(selectEmail());
  const password = yield select(selectPassword());
  //
  const url = `${process.env.API_URL}/login.json`;
  const data = {
    login: {
      email,
      password,
    },
  };
  //
  yield axios({
    url,
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    data,
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  // request.post(url, { form: data }, (err, response, body) => {
  //   //
  //   console.log(body);
  // });
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN, login);
}
