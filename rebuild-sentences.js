function RebuildSetence(words, lengths) {
    let newWords = []

    for (let i = 0; i < words.length; i++) {
        let tempWord = ""

        for (let j = 0; j < lengths[i]; j++) {
            tempWord += words[i][j]
        }
        newWords.push(tempWord)
    }
    return newWords
}

const words = ["The", "sky", "is", "blue"]
const lengths = [2, 3, 1, 2]

console.log(RebuildSetence(words, lengths))
