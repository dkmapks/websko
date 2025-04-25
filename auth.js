export const login = (name) => {
  localStorage.setItem('user', JSON.stringify({ name }));
};

export const isLoggedIn = () => {
  return !!localStorage.getItem('user');
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user') || '{}');
};
