console.log("I am jaypatel");

function check(args) {
  document.getElementById("firstName").innerHTML = "";
  document.getElementById("lastName").innerHTML = "";
  document.getElementById("userName").innerHTML = "";
  document.getElementById("Email").innerHTML = "";
  document.getElementById("Password").innerHTML = "";
  document.getElementById("confirmPassword").innerHTML = "";
  document.getElementById("dateOfBirth").innerHTML = "";
}

let strongPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
let emailCheck = /^([A-Za-z_]){3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

function validation() {
  event.preventDefault();
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let userName = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let dateOfBirth = document.getElementById("dateofbirth").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("cpassword").value;

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
    }
  }

  if (firstName === "") {
    document.getElementById("firstName").innerHTML = "*please fill firstname.";
    return true;
  }
  if (firstName.length < 2 || firstName.length > 20) {
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

  if (emailCheck.test(email)) {
    document.getElementById("Email").innerHTML = "";
  } else {
    document.getElementById("Email").innerHTML = "*Email is invalid .";
    return false;
  }

  if (dateOfBirth === "") {
    document.getElementById("dateOfBirth").innerHTML =
      "*please fill the date of birth.";
    return false;
  }

  if (strongPassword.test(password)) {
    document.getElementById("Password").innerHTML = "";
  } else {
    document.getElementById("Password").innerHTML =
      "* please fill the strong password.";
    return false;
  }

  if (password.match(confirmPassword)) {
    document.getElementById("Password").innerHTML = "";
  } else {
    document.getElementById("confirmPassword").innerHTML =
      "*password in not matching.";
    return false;
  }
  localStorage.setItem("users", JSON.stringify(usersRecords));
  alert(`You are Registered Successfully .. Go for signup", "success"`);
  setTimeout(function () {
    window.location.href = "..//index.html";
  }, 2000);
}
