





export const setUserToLocal = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
}



export const getUserFromLocal = () => {
  const data = localStorage.getItem('users');
  return data === null ? [] : JSON.parse(data);
}















