
let text = document.getElementById("text");
let length1 = document.getElementById("length");
let uppercase1 = document.getElementById("Uppercase");
let lowerrcase1 = document.getElementById("Lowercase");
let number1 =document.getElementById("Numbers");
let symbol1 =document.getElementById("Symbols");
const UpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const LowerLetters = "abcdefghijklmnopqrstuvwxyz";
const Symbols = "!@#$%^&*()_+/*-=<>?{}";
const Numbers = "1234567890";
const button1 = document.getElementsByClassName("button")[0];



 function uppercase(){
    return (UpperLetters[Math.floor(Math.random()*UpperLetters.length)]);
 }
 function lowercase(){
  return (LowerLetters[Math.floor(Math.random()*LowerLetters.length)]);
}
function symbolcase(){
  return (Symbols[Math.floor(Math.random()*Symbols.length)]);
}
function numbercase(){
  return (Numbers[Math.floor(Math.random()*Numbers.length)]);
}


 
function generatepassword(){
  let xs = [];
  if(uppercase1.checked){
    xs.push(uppercase());
    console.log(xs)
 }
 if(lowerrcase1.checked){
  xs.push(lowercase());
  console.log(xs)
}
if(symbol1.checked){
  xs.push(symbolcase());
}
if(number1.checked){
  xs.push(numbercase());
}
return (xs[Math.floor(Math.random()*xs.length)]);
}

function generatex(){
let len = length1.value;
let password = "";
for (let i = 0; i < len; i++) {
  password += generatepassword() ;
}
text.value = password;
}

button1.addEventListener("click", (e) => {
  e.preventDefault()
  generatex()
})

