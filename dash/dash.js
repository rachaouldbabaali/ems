const displayUserInfo = () => {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  swal(`Welcome you back ${userInfo.userName.toUpperCase()}`);
};
