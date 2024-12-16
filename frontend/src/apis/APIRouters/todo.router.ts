export const todo = {
  create: {
    value: "http://localhost:3001/todos",
  },
  delete: {
    value: (id: string) => `http://localhost:3001/todos/${id}`,
  },
  fetch: {
    value: "http://localhost:3001/todos",
  },
  update: {
    value: (id: string) => `http://localhost:3001/todos/${id}`,
  },
};
