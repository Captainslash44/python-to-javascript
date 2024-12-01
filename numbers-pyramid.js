const x = parseInt(prompt("Enter an integer: "))

let str = ""

for (let i = 1; i <= x; i++) {
    str += String(i) + " "
    console.log(str)
}