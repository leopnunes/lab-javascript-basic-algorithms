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

// BONUS (1) !!!!!!

let string1 = "Nunc vehicula sed libero non aliquet. Aliquam malesuada auctor massa, ut molestie ligula ornare feugiat. Sed id nisl facilisis, tristique lorem ut, cursus lorem. Maecenas pharetra nulla id dui fermentum malesuada. Mauris faucibus massa vel purus posuere lacinia. Proin eleifend ultricies ex, at finibus velit sodales eget. Maecenas sit amet massa et turpis dictum interdum commodo non nisl. Donec sem enim, pellentesque sit amet lectus at, molestie scelerisque dui. Curabitur porttitor elit vitae elit maximus, quis tincidunt tellus lobortis. Ut lectus nisi, bibendum id magna id, placerat volutpat diam. Aliquam erat volutpat. Vivamus in orci dapibus, mollis est vel, lobortis elit."
let string2 = "Nulla tincidunt, tellus sed auctor luctus, enim lacus sollicitudin est, non fringilla nulla nisi sed dui. Nullam vitae elit vel orci consectetur tempor. Donec ac felis nunc. Curabitur sit amet arcu felis. Quisque non mauris ut nulla ullamcorper ullamcorper. Morbi et vestibulum mauris, sed tincidunt nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed venenatis cursus urna a tristique. Ut ornare neque non lacus tempus, eu feugiat nisi efficitur. Pellentesque sollicitudin elit et fermentum congue. Cras finibus sapien porta, eleifend mi eget, interdum diam. Pellentesque et nibh turpis. Vivamus luctus augue vitae mi aliquam, sit amet consequat lorem elementum. Suspendisse tortor quam, finibus at diam vitae, dignissim congue lacus. Praesent tempus sem a interdum tincidunt."
let string3 = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum sit amet blandit libero. Suspendisse arcu neque, imperdiet gravida ipsum ut, eleifend consectetur purus. Morbi odio sem, vestibulum ac nisl non, fringilla placerat nisi. Proin ut erat lacinia, varius lorem et, convallis lectus. Proin maximus elit nunc. Sed viverra nibh ut lorem placerat, in condimentum augue porta. Sed vitae vulputate lorem."

let result1 = string1.length
let result2 = string2.length
let result3 = string3.length

console.log(result1)
console.log(result2)
console.log(result3)

let palavra = "et";
let contagem1 = 0;

let string1split = string1.split(' ')
let string2split = string2.split(' ')
let string3split = string3.split(' ')


for (var i = 0; i < string1split.length; i++) {
    if (string1split[i] == palavra) {
        contagem1++;
    }
}
console.log(contagem1)


    let contagem2 = 0;

    for (var i = 0; i < string2split.length; i++) {
        if (string2split[i] == palavra) {
            contagem2++;
        }
    }
    console.log(contagem2)


        let contagem3 = 0;

        for (var i = 0; i < string3split.length; i++) {
            if (string3split[i] == palavra) {
                contagem3++;
            }
        }
        console.log(contagem3)