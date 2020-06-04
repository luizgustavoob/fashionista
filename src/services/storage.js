const getStorage = key => {
  const value = localStorage.getItem(key);
  if (value === null) {
    return {};
  }
  return JSON.parse(value);
};

const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export {
  getStorage,
  setStorage
};