function LongestSubarray(array) {

    let length = 0

    if (array.length < 2) {
        return 0
    }

    for (let size = 2; size < array.length + 1; size++) {

        for (let i = 0; i < array.length - size + 1; i++) {
            let counter = 0

            for (let j = i; j < size + i; j++) {
                if (array[j] == 0) {
                    counter += 1
                } else {
                    counter -= 1
                }
            }

            if (counter == 0) {
                length = size
            }
        }
    }
    return length
}


array = [1, 0, 1, 0]

console.log(LongestSubarray(array))