const n = parseInt(prompt("Enter a number: "))

let sum = ""
let total = 0

for (let i = 1; i < n; i++) {
    if (i % 2 != 0) {
        sum += String(i) + " "
        total += i
    }
}

console.log("The sum of the odd numbers is " + sum + " = " + total)
