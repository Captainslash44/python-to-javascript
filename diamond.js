const rows = parseInt(prompt("For Rows: "));

const spaces = rows - 1;


for (let i = 1; i < rows + 1; i++) {
    console.log(spaces * " " + ((i * 2) - 1) * "*")


}