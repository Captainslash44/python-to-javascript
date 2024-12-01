function MoveZeroes(numbers) {
    index = 0

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] != 0) {

            let temp = numbers[i]
            numbers[i] = numbers[index]
            numbers[index] = temp
            index++
        }
    }
    return numbers
}


numbers = [1, 2, 3, 0, 4, 0, 5, 0, 6]

console.log(MoveZeroes(numbers))