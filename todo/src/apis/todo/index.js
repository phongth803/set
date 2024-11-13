import axios from "axios";

export const fetchTodos = async () => {
  try {
    const response = await axios.get("http://localhost:3001/todos");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTodo = async (name) => {
  try {
    const response = await axios.post("http://localhost:3001/todos", {
      todoName: name,
      isChecked: false,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/todos/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (id, isChecked, name) => {
  try {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      todoName: name,
      isChecked: isChecked,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
