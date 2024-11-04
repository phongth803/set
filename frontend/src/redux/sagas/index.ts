import { all } from "redux-saga/effects";
import {
  watchFetchTask,
  watchAddTask,
  watchDeleteTask,
  watchUpdateTask,
} from "./task.saga";

export default function* rootSaga() {
  yield all([
    watchAddTask(),
    watchFetchTask(),
    watchDeleteTask(),
    watchUpdateTask(),
  ]);
}
