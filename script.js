const lengthSlider = document.getElementById("length");
const lenValue = document.getElementById("lenValue");
const strengthText = document.getElementById("strength");
const passwordField = document.getElementById("password");

lengthSlider.addEventListener("input", () => {
  lenValue.innerText = lengthSlider.value;
});

function generatePassword(){

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()";

let chars = lower;

if(document.getElementById("uppercase").checked) chars += upper;
if(document.getElementById("numbers").checked) chars += numbers;
if(document.getElementById("symbols").checked) chars += symbols;

let length = lengthSlider.value;
let password = "";

for(let i=0;i<length;i++){
password += chars[Math.floor(Math.random()*chars.length)];
}

passwordField.value = password;

checkStrength(password);

/* animation */
passwordField.classList.add("flash");

setTimeout(()=>{
passwordField.classList.remove("flash");
},300);
}

function checkStrength(password){

let strength = "Weak";

if(password.length >= 10) strength = "Medium";

if(password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[@#$%^&*()]/)){
strength = "Strong";
}

strengthText.innerText = "Strength: " + strength;
}

function copyPassword(){

navigator.clipboard.writeText(passwordField.value);

strengthText.innerText = "✅ Copied!";

setTimeout(()=>{
strengthText.innerText = "Strength: Weak";
},1500);
}