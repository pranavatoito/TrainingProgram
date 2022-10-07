const isAuth = () => {
  const email = window.localStorage.getItem("email");
  if (email) {
    console.log("Authentication Success");
    return true;
  } else {
    console.log("Authentication Failed Access denied");
    return false;
  }
};
export default isAuth;
