const x = parseInt(prompt("Enter an integer: "))

let array = []

for (let i = 1; i <= x + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        array.push(i)
    }
}

console.log(array)