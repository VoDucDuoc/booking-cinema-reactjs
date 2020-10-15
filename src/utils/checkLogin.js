export const checkLogin = () => {
  const userLocal = localStorage.getItem("user");

  if (userLocal) {
    return true;
  } else {
    return false;
  }
};

