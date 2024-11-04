import {
  fetchTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from '../../apis/todo/index';
import ActionType from '../../constans/ActionType';
import {call, put, takeLatest} from 'redux-saga/effects';

function* fetchTask() {
  try {
    const response = yield call(fetchTodos);
    yield put({type: ActionType.FETCH_TODO_SUCCESS, payload: response});
  } catch (error) {
    yield put({type: ActionType.FETCH_TODO_FAILURE, payload: error.message});
  }
}

function* createTask(action) {
  try {
    const response = yield call(createTodo, action.payload);
    yield put({type: ActionType.ADD_TODO_SUCCESS, payload: response});
  } catch (error) {
    yield put({type: ActionType.ADD_TODO_FAILURE, payload: error.message});
  }
}

function* deleteTask(action) {
  try {
    yield call(deleteTodo, action.payload);
    yield put({
      type: ActionType.DELETE_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    yield put({type: ActionType.DELETE_TODO_FAILURE, payload: error.message});
  }
}

function* updateTask(action) {
  try {
    yield call(
      updateTodo,
      action.payload.id,
      action.payload.isChecked,
      action.payload.name,
    );
    yield put({
      type: ActionType.UPDATE_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    yield put({type: ActionType.UPDATE_TODO_FAILURE, payload: error.message});
  }
}

export function* watchUpdateTask() {
  yield takeLatest(ActionType.UPDATE_TODO_REQUEST, updateTask);
}

export function* watchFetchTask() {
  yield takeLatest(ActionType.FETCH_TODO_REQUEST, fetchTask);
}

export function* watchAddTask() {
  yield takeLatest(ActionType.ADD_TODO_REQUEST, createTask);
}

export function* watchDeleteTask() {
  yield takeLatest(ActionType.DELETE_TODO_REQUEST, deleteTask);
}
