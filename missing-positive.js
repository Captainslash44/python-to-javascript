function FirstMissingPositive(array) {

    maximum = Math.max(...array)
    let missingNumber = -1
    let missingNumbers = []

    for (let i = 0; i < maximum; i++) {
        if (IsInArray((maximum - i), array) == false) {
            missingNumber = maximum - i
            missingNumbers.push(missingNumber)
        }
    }
    if (missingNumber == -1) {
        missingNumber = maximum + 1
    } else {
        missingNumber = Math.max(missingNumbers)
    }
    return missingNumber
}


function IsInArray(element, array) {
    let result = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            result = true
        }
    }
    return result
}



numbers = [0, 1, 3, 4]

console.log(FirstMissingPositive(numbers))
console.log(IsInArray(1, numbers))
console.log(Math.max(...numbers))