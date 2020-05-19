const user_Input = document.querySelector("#user-input")
const roll_Button = document.querySelector("#roll-button")
const sumOfRolls = document.querySelector("#sum-of-rolls")
const ShowAllRoll = document.querySelector("Show-All-Roll")
let dieRolls = 0
let diceRollArray = []
let addedDice = 0

roll_Button.addEventListener("click", function() {

    for (let index = 1; index <= user_Input.value; index +=1) {
 
        // Picks random number between 1 and 6

    dieRolls = Math.floor(Math.random() * (6 - 1 + 1)) + 1
        // console.log("Roll number "+ index)
   
        // Places the result of the roll in an array

    diceRollArray.push(dieRolls)
        // console.log(diceRoll)
    
        // Add the results of the rolls
    addedDice += dieRolls
}

console.log(diceRollArray)
console.log(addedDice)


// Add sum to the Total area on the page
document.getElementById("sum-of-rolls").innerHTML = addedDice

// Show all rolls

document.getElementById("Show-All-Roll").innerHTML = diceRollArray
})



