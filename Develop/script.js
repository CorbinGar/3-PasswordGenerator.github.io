// Assignment Code




var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function writePassword(){

  var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"]
  var numericals = ["1","2","3","4","5","6","7","8","9","10"]
 
 
 
 
  var temppass = temppass + genrancharfromarray(characters);
  window.prompt(temppass);




  var passlength 
  var numericalsTF = YNverify("Numericals");
  var specialcharTF = YNverify("Special Characters");
  var capitalsTF = YNverify("Capitals");
 


  
 if(numericalsTF){
  var temppass = temppass + genrancharfromarray(numericals);
  window.prompt(temppass);
  var charcters = charcters.concat(numericals);
 }
  
  


 var temppass = genrancharfromarray(possiblecharacters);
  window.prompt(temppass);










  



  

  var password = generatePassword(passlength);
  var passwordText = document.querySelector("#password");

});




function YNverify(windowtext){
  var loop = true
  var TF = true
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

  return TF
}











function genrancharfromarray(array){

var num = Math.floor(Math.random() * 20);
var char = array[num]

return char
}




