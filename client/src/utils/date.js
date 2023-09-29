export const formatDate = (datetime) => {
  const date = new Date(datetime);
  return date;
};

export const getTime = (createdAt) => {
  const date = new Date(createdAt);
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = date.toLocaleString("en-US", options);
  return formattedTime;
};
