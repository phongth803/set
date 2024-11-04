import { AnyAction } from "redux";
import ActionType from "../../constans/ActionType";

interface Todo {
  todoID: string;
  todoName: string;
  isChecked: boolean;
}

const initialState = {
  todos: [] as Todo[],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case ActionType.FETCH_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionType.ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };
    case ActionType.ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionType.DELETE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos].filter(
          (todo) => todo.todoID !== action.payload
        ),
      };
    case ActionType.DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionType.UPDATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos].map((todo) =>
          todo.todoID === action.payload.id
            ? { ...todo, ...action.payload }
            : todo
        ),
      };
    case ActionType.UPDATE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
