import axios from 'axios';

export const fetchTodos = async () => {
  try {
    console.log('fetchTodos');
    const response = await axios.get('http://10.0.2.2:3001/todos');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTodo = async (name: string) => {
  try {
    const response = await axios.post('http://10.0.2.2:3001/todos', {
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
    const response = await axios.delete(`http://10.0.2.2:3001/todos/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (
  id: string,
  isChecked: boolean,
  name: string,
) => {
  try {
    const response = await axios.put(`http://10.0.2.2:3001/todos/${id}`, {
      todoName: name,
      isChecked: isChecked,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
