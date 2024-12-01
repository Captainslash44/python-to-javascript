const rows = parseInt(prompt("For Rows: "));



for (let i = 1; i < rows + 1; i++) {
    let pattern = "* "
    let space = " "
    console.log(space.repeat(((rows + 1) - i)) + pattern.repeat(i))

}