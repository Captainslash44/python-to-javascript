function FindPeaks(array) {
    let indices = []
    lastIndex = array.length - 1
    indexBeforeLast = array.length - 2

    if (array[0] > array[1] && array[0] > array[lastIndex]) {
        indices.push(0)
    }

    if (array[lastIndex] > array[indexBeforeLast] && array[lastIndex > array[0]]) {
        indices.push(lastIndex)
    }

    for (let i = 0; i < lastIndex; i++) {

        if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
            indices.push(i)
        }
    }

    return indices
}


numbers = [5, 3, 4, 1, 0]

console.log(FindPeaks(numbers))