console.log("I am ready!")

// Iteration 1: Names and Input
let hacker1 = "Karen";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Jino";
console.log(`The driver's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The driver ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}


// Iteration 3: Loops
//3.1:
let nome1 = hacker2.toUpperCase();
let nome2 = nome1.split('');

console.log(nome2.join(' '));

//3.2:
let nome3 = nome2.reverse();
let nome4 = nome3.join(' ');

console.log(nome4)

//3.3:
let karen1 = hacker1.split('');
let arr =  [hacker1, hacker2];

arr.sort();

if (arr[0] === hacker1) {
    console.log("The driver's name goes first.")

} else if (arr[0] === hacker2) {
    console.log("Yo, the navigator goes first definitely.")

} else {
    console.log("What?! You both have the same name?")
}

/* indexof
charat
localecompare */
