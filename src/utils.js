export const imageSearch = async ({ query }) => {
  const response = await fetch(
    `https://pixabay.com/api/?key=31860958-1f3c5e322d88dd0cee36f1584&q=${query}&page=1&per_page=100`
  );
  return await response.json();
};

export const splitStringToArray = (originalString, separator) => {
  return originalString.split(separator);
};
