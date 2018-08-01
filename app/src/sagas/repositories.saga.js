import { put, takeLatest, call } from "redux-saga/effects";
import {
  repositoriesAction,
  fulfilledRepositories
} from "../actions/repositories.action";
import { appConfig } from "../config/app.config";
import Api from "../api/api";

function* fetchRepositories() {
  try {
    const repositories = yield call(Api.fetchRepositories);
    yield put(fulfilledRepositories(repositories));
  } catch (error) {}
}

export function* watchRepositoriesSagasAsync() {
  yield [takeLatest(repositoriesAction.requested, fetchRepositories)];
}
