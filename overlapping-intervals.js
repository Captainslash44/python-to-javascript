function MergeIntervals(intervals) {

    intervals.sort()
    let merged = []
    let prev = intervals[0]

    for (let i = 1; i < intervals.length; i++) {

        if (intervals[i][0] <= prev[1]) {

            prev[1] = Math.max(intervals[i][1], prev[1])

        } else {
            merged.push(prev)
            prev = intervals[i]
        }
    }
    merged.push(prev)
    return merged
}


intervals = [[1, 2], [3, 4], [6, 8]]

console.log(MergeIntervals(intervals))
