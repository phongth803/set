import axios from "axios";
import { todo } from "../APIRouters/todo.router";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(todo.fetch.value);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTodo = async (name: string) => {
  try {
    const response = await axios.post(todo.create.value, {
      todoName: name,
      isChecked: false,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const response = await axios.delete(todo.delete.value(id));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (
  id: string,
  isChecked: boolean,
  name: string
) => {
  try {
    const response = await axios.put(todo.update.value(id), {
      todoName: name,
      isChecked: isChecked,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
