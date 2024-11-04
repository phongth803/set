import ActionType from '../../constans/ActionType';

export type Todo = {
  taskName: string;
};

export const addTodoRequest = (todo: string) => ({
  type: ActionType.ADD_TODO_REQUEST,
  payload: todo,
});

export const addTodoSuccess = (todo: string) => ({
  type: ActionType.ADD_TODO_SUCCESS,
  payload: todo,
});

export const addTodoFailure = (error: string) => ({
  type: ActionType.ADD_TODO_FAILURE,
  payload: error,
});

export const fetchTodoRequest = () => ({
  type: ActionType.FETCH_TODO_REQUEST,
});

export const fetchTodoSuccess = (todos: Todo[]) => ({
  type: ActionType.FETCH_TODO_SUCCESS,
  payload: todos,
});

export const fetchTodoFailure = (error: string) => ({
  type: ActionType.FETCH_TODO_FAILURE,
  payload: error,
});

export const deleteTodoRequest = (id: string) => ({
  type: ActionType.DELETE_TODO_REQUEST,
  payload: id,
});

export const deleteTodoSuccess = (id: string) => ({
  type: ActionType.DELETE_TODO_SUCCESS,
  payload: id,
});

export const deleteTodoFailure = (error: string) => ({
  type: ActionType.DELETE_TODO_FAILURE,
  payload: error,
});

export const updateTodoRequest = (
  id: string,
  isChecked: boolean,
  name: string,
) => ({
  type: ActionType.UPDATE_TODO_REQUEST,
  payload: {id, isChecked, name},
});

export const updateTodoSuccess = (
  id: string,
  isChecked: boolean,
  name: string,
) => ({
  type: ActionType.UPDATE_TODO_SUCCESS,
  payload: {id, isChecked, name},
});

export const updateTodoFailure = (error: string) => ({
  type: ActionType.UPDATE_TODO_FAILURE,
  payload: error,
});
