window.onload = function () {

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var number = getRandomInteger(1, 10);

    function compareNumbers(first, second) {
        if (first === second) {
            return true;
        } else {
            return false;
        }
    }

    function guessTheNumber(arvaus) {
        var guess = parseInt(document.getElementById("number").value);
        if (guess >= 1 && guess <= 10 && Number.isInteger(guess)) {
            if (compareNumbers(guess, arvaus)) {
                window.alert("Your guess was correct");
                number = getRandomInteger(1, 10);
            } else {
                window.alert("Your guess was incorrect");
            }
        } else {
            window.alert("Your guess has to be an integer number between 1 and 10.");
        }
    }
    
    document.getElementById("button").addEventListener("click", function () {
        guessTheNumber(number);
    });
};