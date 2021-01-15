// Assignment Code

window.prompt("Enter R, P, or S:");


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function writePassword() {

  window.prompt("Enter R, P, or S:");

  var specialchar = false
  var minpasslength = 8
  var maxpasslength = 128
  var passlength = 8
  var capitals = false

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

});







