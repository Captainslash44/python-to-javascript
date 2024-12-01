function SpecialRearrangement(array) {
    let oddNumbers = []
    let evenNumbers = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNumbers.push(array[i])
        } else {
            oddNumbers.push(array[i])
        }
    }

    const answer = evenNumbers.concat(oddNumbers)

    return answer
}


let numbers = [3, 4, 1, 5, 6, 7, 2, 19, 18, 16, 200, 31]

console.log(SpecialRearrangement(numbers))