console.log("I am jaypatel");

var step = false;

function validation() {
  event.preventDefault();
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let userName = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let dateOfBirth = document.getElementById("dateofbirth").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("cpassword").value;

  let strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


  let usersRecords = new Array();
  usersRecords = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (
    firstName.length > 0 &&
    lastName.length > 0 &&
    userName.length > 0 &&
    email.length > 0 &&
    dateOfBirth.length > 0 &&
    password.length > 0 &&
    confirmPassword.length > 0
  ) {
    if (
      usersRecords.some((e) => {
        return e.firstName === firstName.value;
      })
    ) {
      alert("Sorry username alredy exists");
    } else if (
      usersRecords.some((e) => {
        return e.email == email.value;
      })
    ) {
      alert("Sorry email is already exist");
    } else {
      usersRecords.push({
        firstname: firstName,
        lastname: lastName,
        username: userName,
        dateofbirth: dateOfBirth,
        email: email,
        password: password,
      });
      localStorage.setItem("users", JSON.stringify(usersRecords));
      alert(`You are Registered Successfully .. Go for signup", "success"`);

      if (firstName.length < 0) {
        document.getElementById("signup-btn").disabled = true;
      }

      setTimeout(function () {
        window.location.href = "..//index.html";
      }, 2000);
    }
  }

  if (firstName === "") {
    document.getElementById("firstName").innerHTML = "*please fill firstname.";
    return false;
  }
  if (firstName.length <= 2 || firstName.length > 20) {
    document.getElementById("firstName").innerHTML =
      "*firstName lengths  must be 2 and 20 .";
    return false;
  }
  if (!isNaN(firstName)) {
    document.getElementById("firstName").innerHTML =
      "*Only characters are allowed";
    return false;
  }

  if (lastName === "") {
    document.getElementById("lastName").innerHTML = "*please fill lasName.";
    return false;
  }
  if (userName === "") {
    document.getElementById("userName").innerHTML = "*please fill userName.";
    return false;
  }
  if (email === "") {
    document.getElementById("email").innerHTML = "*please fill email .";
    return false;
  }
  if (email.indexOf("@") <= 0) {
    document.getElementById("email").innerHTML = "*@  Invalid Position.";
    return false;
  }

  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("email").innerHTML = "*.  Invalid Position.";
    return false;
  }

  if (dateOfBirth === "") {
    document.getElementById("birthName").innerHTML =
      "*please fill dateOfBirth.";
    return false;
  }
  if (password === "") {
    document.getElementById("password").innerHTML = "*please fill password.";
    return false;
  }
  if (password.length >= 5 || password.length > 20) {
    document.getElementById("password").innerHTML =
      "*password lengths  must be 2 and 20 .";
    return false;
  } else if (strongPassword(password)) {
    document.getElementById("password").innerHTML = "*Password is not strong.";
    return false;
  }
  if (confirmPassword === "") {
    document.getElementById("confirmPassword").innerHTML =
      "*please fill confirmpassName.";
    return false;
  }
}
