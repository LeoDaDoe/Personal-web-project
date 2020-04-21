// function passValidation() {
//   var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
//   var TempPass = document.getElementById("registerFormPassword").value;
//   if (
//     document.getElementById("registerFormPassword").value ==
//       document.getElementById("registerFormRPassword").value &&
//     TempPass.match(passw)
//   ) {
//     document.getElementById("registerSubmitBtn").disabled = false;
//   } else {
//     document.getElementById("registerSubmitBtn").disabled = true;
//   }
// }

// function validateEmail() {
//   var re = /\S+@\S+\.\S+/;
//   var TempEmail = document.getElementById("registerFormEmail").value;
//   if (re.test(TempEmail)) {
//     document.getElementById("registerSubmitBtn").disabled = false;
//   } else {
//     document.getElementById("registerSubmitBtn").disabled = true;
//   }
// }

function regFormValidation() {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
  var TempPass = document.getElementById("registerFormPassword").value;
  var email = /\S+@\S+\.\S+/;
  var TempEmail = document.getElementById("registerFormEmail").value;
  if (
    document.getElementById("registerFormPassword").value ==
      document.getElementById("registerFormRPassword").value &&
    passw.test(TempPass) &&
    email.test(TempEmail)
  ) {
    document.getElementById("registerSubmitBtn").disabled = false;
  } else {
    document.getElementById("registerSubmitBtn").disabled = true;
  }
}
