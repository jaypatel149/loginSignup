console.log("Hey i am jaypatel");

function pageLogin() {
    event.preventDefault()
    
    let userEmail = document.getElementById("email").value;
    let userPass = document.getElementById("pwd").value;


    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((e) => {
        return e.username == userEmail && e.password == userPass;
    })) {
        alert(`You Have Login Successfully`);
        setTimeout(function () {
          window.location.href = "https://github.com/jaypatel149"
      }, 2000);
    }
    else if (user_records.some((e) => {
        return e.email == userEmail && e.password == userPass;
    })) {
        alert(`You Have Login Successfully`); 
        setTimeout(function () {
          window.location.href = "https://github.com/jaypatel149"
      }, 2000);
    }
    else if (user_records.some((e) => {
        return e.email == userEmail && e.password != userPass;
    })) {
        alert("Password is Incorrect ");
    }
    else if (user_records.some((e) => {
        return e.email != userEmail;
    })) {
        alert("Email is not valid");
    }
    else {
        alert('Account is not exist,Register First');
    }

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
  
  

}

