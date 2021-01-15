// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function writePassword(){

  var passwordText = document.querySelector("#password");

  var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numericals = ["1","2","3","4","5","6","7","8","9","10"]
  var specials = ["!","@","#","$","%","&","(",")","_","-"]
  var temppass = genrancharfromarray(characters);

  if(YNverify("Numericals")){
    var temppass = temppass + genrancharfromarray(numericals);
    characters = characters.concat(numericals);
  }

  if(YNverify("Capitals")){
    var temppass = temppass + genrancharfromarray(capitals);
    characters = characters.concat(capitals);
  }

  if(YNverify("Special Characters")){
    var temppass = temppass + genrancharfromarray(specials);
    characters = characters.concat(specials);
  }

  var passlength = passlengthgen();
  var password = genpass(temppass,passlength,characters);
  passwordText.textContent = password
});


function genpass(pass, passlength, array ){
  var password = pass;
  while(password.length != passlength){
    password = password + genrancharfromarray(array);
  }
  return password
}


function YNverify(windowtext){
  var loop = true
  var TF = false
  var windowinput

  while(loop){
    windowinput = window.prompt(windowtext + " Y/N");
    windowinput = windowinput.toLocaleUpperCase();
    if(windowinput === "Y" || windowinput === "N"){
      loop = false
      }else{
        window.prompt(windowinput + " is not Y/N")
    }
  }
 if(windowinput === "Y"){
  TF = true
 }
  return TF
}


function passlengthgen(){
  var loop = true
  var windowinput = ""
  while(loop){
    windowinput = window.prompt("password length 8-128");
    if(windowinput >= 8 && windowinput <= 128 ){
      loop = false
      }else{
        window.prompt(windowinput + " is not between 8 and 128")
    }
  }
  return windowinput
}







function genrancharfromarray(array){
var num = Math.floor(Math.random() * (array.length - 1));
var char = array[num]
return char
}




