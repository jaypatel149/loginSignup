function validation() {
  let firstName = document.getElementById("firstname").value;
  let lasName = document.getElementById("lastname").value;
  let userName = document.getElementById("username").value;
  let emailName = document.getElementById("email").value;
  let dateName = document.getElementById("dateofbirth").value;
  let passName = document.getElementById("password").value;
  let cpassName = document.getElementById("cpassword").value;

  window.localStorage.setItem("firstName", firstName);
  window.localStorage.setItem("lastName", lasName);
  window.localStorage.setItem("userName", userName);
  window.localStorage.setItem("emailName", emailName);
  window.localStorage.setItem("dateofName", dateName);
  window.localStorage.setItem("passName", passName);
  window.localStorage.setItem("cpassName", cpassName);

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((e) => {
       e.emailName == emailName;
    })
  ) {

  } else {
    user_records.push({
      firstName: firstName,
      lastName: lasName,
      userName: userName,
      emailName: emailName,
      dateofName: dateName,
      passName: passName,
      cpassName: cpassName,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  }

  if (firstName == "") {
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

  if (lasName == "") {
    document.getElementById("lastName").innerHTML = "*please fill lasName.";
    return false;
  }
  if (userName == "") {
    document.getElementById("userName").innerHTML = "*please fill userName.";
    return false;
  }
  if (emailName == "") {
    document.getElementById("emailName").innerHTML = "*please fill emailName .";
    return false;
  }
  if (emailName.indexOf("@") <= 0) {
    document.getElementById("emailName").innerHTML = "*@  Invalid Position.";
    return false;
  }

  if (
    emailName.charAt(emailName.length - 4) != "." &&
    emailName.charAt(emailName.length - 3) != "."
  ) {
    document.getElementById("emailName").innerHTML = "*.  Invalid Position.";
    return false;
  }

  if (dateName == "") {
    document.getElementById("birthName").innerHTML = "*please fill dateName.";
    return false;
  }
  if (passName == "") {
    document.getElementById("passName").innerHTML = "*please fill passName.";
    return false;
  }
  if (passName.length <= 5 || passName.length > 20) {
    document.getElementById("passName").innerHTML =
      "*passName lengths  must be 2 and 20 .";
    return false;
  }
  if (passName !== cpassName) {
    document.getElementById("cpassName").innerHTML =
      "*passName are not matching.";
    return false;
  }

  if (cpassName == "") {
    document.getElementById("cpassName").innerHTML =
      "*please fill confirmpassName.";
    return false;
  }
}