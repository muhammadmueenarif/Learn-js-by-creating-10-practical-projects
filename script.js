
var numbersPattern = /[0-9]/;
var specialCharactersPattern = /[~`!@#$%^&*()_+=\[\]{}; :|<>,.?\/]/;
var lowercaseLettersPattern = /[a-z]/;
var uppercaseLettersPattern = /[A-Z]/;

document.getElementById('input').addEventListener('keyup', ()=>{
    checkPassword();
});

function checkPassword() {
    var userInput = document.getElementById('input').value;
    // console.log(`userinput is ${userInput}`);
    
    if(userInput === '') {
        document.getElementById('passwordOutput').innerText = 'Password cannot be empty';
    } 
    else if (numbersPattern.test(userInput) && specialCharactersPattern.test(userInput) && lowercaseLettersPattern.test(userInput) && uppercaseLettersPattern.test(userInput)) {
        document.getElementById('passwordOutput').innerText = 'Strong Password';
    } else {
        document.getElementById('passwordOutput').innerText = 'Weak Password';
    }
}