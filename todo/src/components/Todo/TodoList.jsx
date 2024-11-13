import React, { useEffect, useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../../apis/todo";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const doneTask = tasks.filter((task) => task.completed);
  const notDoneTask = tasks.filter((task) => !task.completed);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchTodos();
        const formattedTodos = response.map((todo) => ({
          id: todo.todoID,
          task: todo.todoName,
          completed: todo.isChecked,
        }));
        setTasks(formattedTodos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };
    getData();
  }, []);

  const startEdit = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (!task) return;
    setCurrentTask(task);
  };

  const edit = (name) => {
    setCurrentTask((prev) => {
      if (prev) {
        return { ...prev, task: name };
      }
      return null;
    });
  };

  const endEdit = async () => {
    if (!currentTask) return;
    try {
      await updateTodo(currentTask.id, currentTask.completed, currentTask.task);
      setTasks((prev) => {
        return prev.map((task) => {
          if (task.id === currentTask.id) {
            return currentTask;
          }
          return task;
        });
      });
      setCurrentTask(null);
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  const handleComplete = async (id, completed, task) => {
    try {
      await updateTodo(id, completed, task);
      setTasks((prev) => {
        return prev.map((task) => {
          if (task.id === id) {
            return { ...task, completed };
          }
          return task;
        });
      });
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await createTodo(task);
      const newTask = {
        id: response.todoID,
        task: response.todoName,
        completed: response.isChecked,
      };
      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteTodo(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">To Do App</h1>
      <TaskInput
        endEdit={endEdit}
        edit={edit}
        addTask={addTask}
        currentTask={currentTask}
      />
      <TaskList
        startEdit={startEdit}
        list={notDoneTask}
        deleteTask={deleteTask}
        handleComplete={handleComplete}
      />
      <TaskList
        startEdit={startEdit}
        doneTask
        list={doneTask}
        deleteTask={deleteTask}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default TodoList;
