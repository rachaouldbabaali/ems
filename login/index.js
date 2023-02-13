const logIn = () => {
  const data = { userName: document.getElementById("user_name").value, password: document.getElementById("pass_word").value };
  // store data in sessions to call them back in dash.html file
  // keep in mind that this is not a good practise
  // never store passwords in cookies or sessions
  if (data.userName === "" || data.password === "") {
    swal("Alert", "All fields are required", "error");
  } else if (data.password.length < 6) {
    swal("Alert", "Your password is weak", "error");
  } else {
    sessionStorage.setItem("userInfo", JSON.stringify(data));
    window.location = "../dash/dash.html";
  }
};
