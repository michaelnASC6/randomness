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


function randomFood(){

    const foodNum = Math.random() * foods.length;

    const roundFood = Math.floor(foodNum);

    const foodFinal = foods [roundFood];

    console.log ("Food: " + foodFinal);
}


function randomLetter(){
    const len = alphabet.length - 1;

    const num = Math.random() * len;
    
    const roundNum = Math.floor(num);
    
    const final = alphabet [roundNum]

    console.log("Number: ", roundNum + 1);
    
    console.log("Letter: " + final);
}

function randomStudents(){

    const numStudents = Math.random() * students.length;

    const roundStudents = Math.floor(numStudents);

    const finalStudents = students [roundStudents]

    console.log("Student: " + finalStudents);
}

function randomGroup(){
    const numGroup = Math.random() * students.length;

    const roundGroup = Math.floor(numGroup);

//    const roundFroup2 = Math.ceiling(numGroup - 1);

    const finalGroup = students [roundGroup]

  //  const finalGroup2 = students [roundGroup2]

    console.log("Group:" + finalGroup + " " + finalGroup + " and " + finalGroup);


}
randomLetter();
randomFood();
randomStudents();
randomGroup();