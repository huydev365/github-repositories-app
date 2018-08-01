import { fork } from "redux-saga/effects";
import { watchRepositoriesSagasAsync } from "./repositories.saga";
export default function* rootSaga() {
  yield [fork(watchRepositoriesSagasAsync)];
}
