/*The function then iterates over each character in the user input using for loop.
Inside loop, character is converted to lowercase using char = userInput[i].toLowerCase(). 
This ensures that function can correctly count vowels regardless of their case.
The function checks if the lowercase character is included in the vowels array using vowels.includes(char). 
If it is, the count variable is incremented by 1.
 */
function checkVowel() {
    var userInput = document.getElementById('input').value;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;

    for (var i = 0; i < userInput.length; i++) {
        var char = userInput[i].toLowerCase();
        if (vowels.includes(char)) {
            count++;
        }
    }
    document.getElementById('output').innerHTML = 'Total vowels = ' + count;
}

