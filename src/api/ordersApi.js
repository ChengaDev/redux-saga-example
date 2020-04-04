export const fetchUserOrders = async (userId) => {
  const response = await fetch(`http://localhost:4000/orders?userId=${userId}`);
  const parsedResponse = await response.json();
  return parsedResponse;
};
