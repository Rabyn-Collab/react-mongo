







export const addUserToLocal = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}


export const getUserFromLocal = () => {
  const user = localStorage.getItem('user');
  return user === null ? null : JSON.parse(user);
}


export const clearFromLocal = () => {
  localStorage.clear();
}



