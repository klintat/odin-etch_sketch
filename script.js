let columns = 16;
let rows = 16;

const gridContainer = document.querySelector("#grid-container");

// Making grid with hover effect
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

const hoverEffect = () => {
    /*document.getElementsByClassName("row").addEventListener("mouseover", function(){
        this.classList.add("hover-effect");
    })*/
    [...document.getElementsByClassName("cell")].forEach(cell => cell.addEventListener("mouseover", function(){
        this.classList.add("hover-effect");
    }))
}

hoverEffect();

