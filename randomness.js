//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

//const number = Math.random()
//const random_number = 21 * number

function randomNumber(){
    console.log(random_number);
}



function randomLetter(){
    const len = alphabet.length - 1;

    const num = Math.random() * len;
    
    const roundNum = Math.floor(num);
    
    const final = alphabet [roundNum]

    console.log("Number: ", roundNum + 1);
    
    console.log("Letter: " + final);

}

randomLetter();