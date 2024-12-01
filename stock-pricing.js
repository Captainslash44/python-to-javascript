function StockPricing(array) {

    let lowestBuying = 9999999999
    let highestSelling = 0
    let lowestDay = 0
    let highestDay = 0

    for (let i = 0; i < array.length; i++) {

        if (array[i] < lowestBuying && i != (array.length - 1)) {
            lowestBuying = array[i]
            lowestDay = i
        }

        if (array[i] > highestSelling && i != 0) {
            highestSelling = array[i]
            highestDay = i
        }

    }

    const maximumProfit = highestSelling - lowestBuying

    if (maximumProfit > 0) {
        return "Your maximum profit is " + maximumProfit + ", you should buy on day " + lowestDay + " and sell on " + highestDay

    } else {
        return "There is no profit on this market :("

    }
}


numbers = [2, 3, 14, 5, 6, 1, 19]

console.log(StockPricing(numbers))