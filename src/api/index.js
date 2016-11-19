export const fetchTodos = () => {
  const todos = [
    { name: "learn react", completed: true },
    { name: "learn redux", completed: false }
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(todos), 2000);
  })
};
