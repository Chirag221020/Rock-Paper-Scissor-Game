// Dark Mode Button

let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let mode = "Light";
btn.addEventListener("click", () => {
  if (mode === "Light") {
    mode = "Dark";
    body.style.backgroundColor = "#121212";
    btn.style.color = "white";
    btn.style.backgroundColor = "#121212";
    btn.style.borderColor = "cyan";
    body.style.color = "white";
    msg.style.borderColor = "white";
  } else {
    mode = "Dark";
    mode = "Light";
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
    btn.style.borderColor = "cyan";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    
    msg.style.borderColor = "Black";
  }
});

// creating logic for game

// crating a function when we track user input we simple call this function to print an output.

/* steps of building logic :-

    1. acces all images of rock paper scissor.
    2. In backend creating userinput and computer input.
    3. now generating random number generated using math.random and add it to the index of string for computer.
    4. comparing this input by if else statement.
    5. Generating messages based on result.

    note :- all command is written in functions for modular programming.*/

// step 1. acces all images of rock paper scissor game.

const containers = document.querySelectorAll(".container");
const score = document.querySelectorAll(".score");
const result = document.querySelectorAll(".result");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user");
const compScore = document.querySelector("#comp");


// step 2. In backend creating userinput and computer input.

let userInput = 0;
let compInput = 0;
let gameResult;
let userName;
let comptName;


// step 3. creating an for each loop to get acess of each div when click

// container get access each div by for each loop and when we use addeventlistner this will track whick div we click.

containers.forEach((eachdiv) => {
  eachdiv.addEventListener("click", () => {
    let userChoice = eachdiv.getAttribute("id");
    playGame(userChoice); //this is a function for getting value by click of user creating in line 120.
  });
});

// step 4. creating an function of array to generate random number of the game for computer.

/* Function 1 */

const computerInput = () => {
  let gameOpt = ["Rock", "Paper", "Scissors"];

  let random = Math.floor(Math.random() * 3);

  return gameOpt[random]; // send this function to the play game function as computer input
};

// Step 5.  Comparing user and computer input by if else statement.

/* Function 2 */ 

  const winner = (Result) => {
  
  if (Result === true) {
    msg.innerText = `congratulations you choose ${userName} your opponent chose  ${comptName} you win`; 
    msg.style.backgroundColor = "#3cf3b6";
     msg.style.color = "black";
     userInput++;
     userScore.innerText = userInput;
   } else if (Result === false) {
    msg.innerText =
      `oops! You choose ${userName} your opponent chose  ${comptName} you win`;
     msg.style.backgroundColor = "Red";
     msg.style.color = "white";
     compInput++;
     compScore.innerText = compInput;
     if(compInput == 5){
      alert("You loose the game 5 times against the computer try again. ")
     }
     
  } else {
     msg.innerText = `Draw, You choose ${userName} your opponent chose  ${comptName} Try again`;
      msg.style.backgroundColor = "#ff7b00";
      msg.style.color = "black";
    
  }
};

/* Function 3 */

const playGame = (userInput) => {
  userName = userInput;
  
 
  //generation computer function
  const computerchoice = computerInput(); //this is a function for getting random value for computer creating in line 76.

  comptName = computerchoice;
   console.log(userName);
  if (userInput === computerchoice) {
    gameResult = "Draw";
  } else if (userInput === "Paper") {
    if (computerchoice === "rock") {
      gameResult = false;
    } else {
      gameResult = true;
    }
  } else if (userInput === "Scissors") {
    if (computerchoice === "Paper") {
      gameResult = true;
    } else {
      gameResult = false;
    }
  } else if (userInput === "Rock") {
    if (computerchoice === "Scissors") {
      gameResult = true;
    } else {
      gameResult = false;
    }
  }
  winner(gameResult);
};





