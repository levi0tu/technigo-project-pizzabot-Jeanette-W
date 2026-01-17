// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const name = prompt(`What is your name?`)
alert(`Hi ${name}, I will take your order now. Let´s begin.`)
// Step 2 - Food choice
// Your code goes here
const food = prompt(`What will be your choice of food? Answer with a number.
  1. Pizza
  2. Pasta
  3. Salad`
)
let foodName = ""
if (food === "1") {
  foodName = "Pizza"
} else if (foodName = "2") {
  foodName = "Pasta"
}
else if (foodName = "3") {
  foodName = "Salad"
}

alert(`You picked ${foodName}, Great choice. 
  Now what type of ${foodName} would you like?`)
// Step 3 - Subtype choice
// Your code goes here
//Pizza
let subtypeName = ""
if (food === "1") {
  const subtype = prompt(`Choose Pizza, answer with a number.
  1. Hawaii 
  2. Capricciosa
  3. Napoli`);
  if (subtype === "1") subtypeName = "Hawaii"
  else if (subtype === "2") subtypeName = "Capricciosa"
  else if (subtype === "3") subtypeName = "Napoli"
}

//Pasta
if (food === "2") {
  const subtype = prompt(`Choose Pasta, answer with a number.
    1. Carbonara
    2. Bolognese
    3. Arrabiata`)
  if (subtype === "1") subtypeName = "Carbonara"
  else if (subtype === "2") subtypeName = "Bolognese"
  else if (subtype === "3") subtypeName = "Arrabiata"
}

//Salad
if (food === "3") {
  const subtype = prompt(`Choose Salad, answer with a number.
    1. Caesar
    2. Ham and Cheese
    3. Greek`)
  if (subtype === "1") subtypeName = "Caesar"
  else if (subtype === "2") subtypeName = "Ham and Cheese"
  else if (subtype === "3") subtypeName = "Greek"
}
alert(`You chose ${subtypeName}.`)

// Step 4 - Age
// Your code goes here
const age = prompt(`How old are you?`)
alert(`Your age is ${age}`)

// Step 5 - Order confirmation
// Your code goes here
const order = prompt(`Your order is ${foodName}, && ${subtypeName}. 
  Confirm order? Yes/No`)

if (order.toLowerCase() === "yes") {
  alert(`Thank you ${name}! Your ${foodName} is now ready.`)
} else {
  alert(`That´s ok. Welcome back!`)
}
