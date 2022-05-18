console.log("Hey i am jaypatel");

function pageLogin() {
    event.preventDefault()
    let userEmail = document.getElementById("email").value;
    let userPass = document.getElementById("pwd").value;

  if (userEmail == "") {
    document.getElementById("email").innerHTML = "*please fill emailName .";
    return true;
  }
  if (userEmail.indexOf("@") <= 0) {
    document.getElementById("email").innerHTML = "*@  Invalid Position.";
    return false;
  }

  if (
    userEmail.charAt(userEmail.length - 4) != "." &&
    userEmail.charAt(userEmail.length - 3) != "."
  ) {
    document.getElementById("userpass").innerHTML = "*.  Invalid Position.";
    return false;
  }
  if (userPass == "") {
    document.getElementById("userpass").innerHTML = "*please fill userpassword.";
    return false;
  }
  if (userPass.length <= 5 || userPass.length > 20) {
    document.getElementById("userpass").innerHTML ="*userpassword lengths  must be 2 and 20 .";
    return false;
  }
  let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((e) => {
        return e.username == userEmail && v.password == userPass;
    })) {
        alert(`Good Job`, "You Have Login Successfully, Welcome to Home Page", "success");
        setTimeout(function () {
          window.location.href = "https://github.com/jaypatel149"
      }, 5000);
    }
    else if (user_records.some((e) => {
        return e.email == userEmail && e.password == userPass;
    })) {
        alert(`Good Job`, "You Have Login Successfully, Welcome to Home Page", "success"); 
        setTimeout(function () {
          window.location.href = "https://github.com/jaypatel149"
      }, 5000);
    }
    else if (user_records.some((e) => {
        return e.email == userEmail && e.password != userPass;
    })) {
        alert("Password is Incorrect ");
    }
    else if (user_records.some((e) => {
        return e.email != userEmail;
    })) {
        alert("Email is not Registered ");
    }
    else {
        alert('Account is not exist,Register First');
    }
 
  

}

