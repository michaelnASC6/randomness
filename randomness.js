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

function randomNumber(){
    console.log(random_number);
}

// function randomLetter(){
//     console.log(alphabet)
// }


const number = Math.random()
const random_number = 21 * number

function randomLetter(){
    const len = alphabet.length - 1;
    const num = Math.random() * len;
    const roundNum = math.floor(num);
    const final = alphabet [roundNum]
    // return alphabet [roundNum];
 //   return final = alphabet [roundNum];
    console.log("Len: ", Len);
    //  return final;

    // console.log ("num: " + num);

}

randomLetter();