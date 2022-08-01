const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const CORRECT = [
    "Correct!"
];
const INCORRECT = [
"Incorrect!"
];

let lives = 3;

let score = 0;

function randomAddition() {

    //Generate random numbers for our addition equation
    let randomNumberOne = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberTwo = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberThree = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberFour = Math.floor(Math.random() * (NUMBERS.length));
    
    //Generate random numbers for success and fail messages
    let randomTrue = Math.floor(Math.random() * (CORRECT.length));
    let randomFalse = Math.floor(Math.random() * (INCORRECT.length));

    //Generate & display a random addition equation as a string
    let equation = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]} + ${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`; 
    
    //Store the first random generated number of the equation inside a variable
    let numberOne = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]}`;
    
    //Store the second random generated number of the equation inside a variable
    let numberTwo = `${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`;

    //Convert the random generated numbers from strings to integers
    let intOne = parseInt(numberOne);
    let intTwo = parseInt(numberTwo);

    //Create a variable that adds the number value of both random generated numbers
    let equationAnswer = intOne + intTwo;

    //Prompt the user to answer the equation
    let addition = prompt(`What's ${equation} ?`);
    
    //Create a variable to store the success or fail message
    let result;

    //Verify if the input equals the correct answer and return the final result
    if (addition == equationAnswer) {
        result = CORRECT[randomTrue];
        document.body.style.backgroundColor = "#90EE90";
        document.getElementById("lives").innerText = `Lives: ${lives}`;
        score += 1;
        document.getElementById("score").innerText = `Your score: ${score}`;

    } else if (lives == 1 && addition != equationAnswer) {
        window.alert(`Ouch! Looks like you're out of lives.\nYour final score was ${score}.`);
        lives = 3;
        result = "";
        document.getElementById("lives").innerText = `Lives: ${lives}`;
        score = 0;
        document.getElementById("score").innerText = `Your score: ${score}`;
    
    } else {
        result = INCORRECT[randomFalse];
        document.body.style.backgroundColor = "#FF6865";
        lives -= 1;
        document.getElementById("lives").innerText = `Lives: ${lives}`;
    }
    
    //Display the result in index.html
    document.getElementById("result").innerText = result;
}

function randomSubtraction() {
    
    //Generate random numbers for our addition equation
    let randomNumberOne = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberTwo = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberThree = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberFour = Math.floor(Math.random() * (NUMBERS.length));
    
    //Generate random numbers for success and fail messages
    let randomTrue = Math.floor(Math.random() * (CORRECT.length));
    let randomFalse = Math.floor(Math.random() * (INCORRECT.length));

    //Generate & display a random addition equation as a string
    let equation = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]} - ${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`; 
    
    //Store the first random generated number of the equation inside a variable
    let numberOne = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]}`;
    
    //Store the second random generated number of the equation inside a variable
    let numberTwo = `${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`;

    //Convert the random generated numbers from strings to integers
    let intOne = parseInt(numberOne);
    let intTwo = parseInt(numberTwo);

    //Create a variable that subtracts the number value of both random generated numbers
    let equationAnswer = intOne - intTwo;

    //Prompt the user to answer the equation
    let addition = prompt(`What's ${equation} ?`);
    
    //Create a variable to store the success or fail message
    let result;

    //Verify if the input equals the correct answer and return the final result
    if (addition == equationAnswer) {
        result = CORRECT[randomTrue];
        document.body.style.backgroundColor = "#90EE90";
        document.getElementById("lives").innerText = `Lives: ${lives}`;
        score += 1;
        document.getElementById("score").innerText = `Your score: ${score}`;

    } else if (lives == 1 && addition != equationAnswer) {
        window.alert(`Ouch! Looks like you're out of lives.\nYour final score was ${score}.`);
        lives = 3;
        result = "";
        document.getElementById("lives").innerText = `Lives: ${lives}`;
        score = 0;
        document.getElementById("score").innerText = `Your score: ${score}`;
    
    } else {
        result = INCORRECT[randomFalse];
        document.body.style.backgroundColor = "#FF6865";
        lives -= 1;
        document.getElementById("lives").innerText = `Lives: ${lives}`;
    }
    
    //Display the result in index.html
    document.getElementById("result").innerText = result;
}

function randomMultiplication() {
    
    //Generate random numbers for our addition equation
    let randomNumberOne = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberTwo = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberThree = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberFour = Math.floor(Math.random() * (NUMBERS.length));
    
    //Generate random numbers for success and fail messages
    let randomTrue = Math.floor(Math.random() * (CORRECT.length));
    let randomFalse = Math.floor(Math.random() * (INCORRECT.length));

    //Generate & display a random addition equation as a string
    let equation = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]} * ${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`; 
    
    //Store the first random generated number of the equation inside a variable
    let numberOne = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]}`;
    
    //Store the second random generated number of the equation inside a variable
    let numberTwo = `${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`;

    //Convert the random generated numbers from strings to integers
    let intOne = parseInt(numberOne);
    let intTwo = parseInt(numberTwo);

    //Create a variable that subtracts the number value of both random generated numbers
    let equationAnswer = intOne * intTwo;

    //Prompt the user to answer the equation
    let addition = prompt(`What's ${equation} ?`);
    
    //Create a variable to store the success or fail message
    let result;

    //Verify if the input equals the correct answer and return the final result
    if (addition == equationAnswer) {
        result = CORRECT[randomTrue];
        document.body.style.backgroundColor = "#90EE90";
        document.getElementById("lives").innerText = `Lives: ${lives}`;
        score += 1;
        document.getElementById("score").innerText = `Your score: ${score}`;

    } else if (lives == 1 && addition != equationAnswer) {
        window.alert(`Ouch! Looks like you're out of lives.\nYour final score was ${score}.`);
        lives = 3;
        result = "";
        document.getElementById("lives").innerText = `Lives: ${lives}`;
        score = 0;
        document.getElementById("score").innerText = `Your score: ${score}`;
    
    } else {
        result = INCORRECT[randomFalse];
        document.body.style.backgroundColor = "#FF6865";
        lives -= 1;
        document.getElementById("lives").innerText = `Lives: ${lives}`;
    }
    
    //Display the result in index.html
    document.getElementById("result").innerText = result;
}


function instructions() {
    window.alert("The goal is to solve as many equations as you can until you run out of lives.");
    window.alert("Each question solved correctly gives you a point but you also lose a life for every every question you get wrong.");
    window.alert("Once your lives count reaches zero, it's game over. Goodluck!");
}


