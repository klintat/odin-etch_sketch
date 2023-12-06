let columns = 16;
let rows = 16;

const gridContainer = document.querySelector("#grid-container");

// Function for making grid layout
const makeGrid = () => {
    for (let i = 0; i < columns; ++i) {
        let column = document.createElement("div");
        column.className = "column";
        for (let j = 0; j < rows; ++j) {
            let cell = document.createElement("div");
            cell.className = "cell";
            column.appendChild(cell);  
        }
        gridContainer.appendChild(column);
    }
}

makeGrid();

// Function for the hover effect
const hoverEffect = () => {
    /*document.getElementsByClassName("row").addEventListener("mouseover", function(){
        this.classList.add("hover-effect");
    })*/
    [...document.getElementsByClassName("cell")].forEach(cell => cell.addEventListener("mouseover", function(){
        this.classList.add("hover-effect");
    }))
}

hoverEffect();

// Function for reset and new layout grid
const btnReset = document.querySelector("#btn-reset");

btnReset.addEventListener("click", function() {
    const userInput = prompt("Make new grid! How big? (max limit: 100)");
    console.log(userInput);
})
