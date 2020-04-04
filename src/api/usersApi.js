export const fetchUsers = async () => {
  const response = await fetch('http://localhost:4000/users');
  const parsedResponse = await response.json();
  return parsedResponse;
};
