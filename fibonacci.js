function Fibonnaci(number) {
    if (number == 1) {
        return 0
    }

    if (number == 2) {
        return 1
    } else {
        return Fibonnaci(number - 1) + Fibonnaci(number - 2)
    }
}



const x = parseInt(prompt("Enter the order of the number in fibonacci sequence"))

console.log(Fibonnaci(x))

