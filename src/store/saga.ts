import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchCurrentItemApi,
  updateCurrentItemApi,
  resetCurrentItemApi,
} from "service/app";
import { ACTION } from "./const";
import { fetchCurrentItem, setCurrentItem, setErrorMessage } from "./action";

function* fetchCurrentItemSaga() {
  const { data, error } = yield call(fetchCurrentItemApi);
  if (data) {
    yield put(setCurrentItem(data));
  } else if (error) {
    yield put(setErrorMessage(error));
  }
}

function* updateCurrentItemSaga({ payload }: any) {
  const { data, error } = yield call(updateCurrentItemApi, payload);
  if (data) {
    yield put(setCurrentItem(data));
  } else if (error) {
    yield put(setErrorMessage(error));
  }
}

function* resetCurrentItemSaga() {
  const { data, error } = yield call(resetCurrentItemApi);
  if (data) {
    yield put(fetchCurrentItem());
  } else if (error) {
    yield put(setErrorMessage(error));
  }
}

export default function* () {
  yield takeLatest(ACTION.FETCH_CURRENT_ITEM, fetchCurrentItemSaga);
  yield takeLatest(ACTION.UPDATE_CURRENT_ITEM, updateCurrentItemSaga);
  yield takeLatest(ACTION.RESET_CURRENT_ITEM, resetCurrentItemSaga);
}
