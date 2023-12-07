const gridContainer = document.querySelector("#grid-container");

// Function for making grid layout
const makeGrid = (gridSize) => {
    function resetGrid(parent) {
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    resetGrid(gridContainer);

    for (let i = 0; i < gridSize; ++i) {
        let column = document.createElement("div");
        column.className = "column";
        for (let j = 0; j < gridSize; ++j) {
            let cell = document.createElement("div");
            cell.className = "cell";
            column.appendChild(cell);  
        }
        gridContainer.appendChild(column);
    }
}

makeGrid(16);

// Function for the hover effect
const hoverEffect = () => {
    const checkboxRGB = document.querySelector("")
    [...document.getElementsByClassName("cell")].forEach(cell => cell.addEventListener("mouseover", function(){
        this.classList.add("hover-effect");
    }))
}

hoverEffect();

// Function for reset and new layout grid
const btnReset = document.querySelector("#btn-reset");

btnReset.addEventListener("click", function() {
    const userInput = Number(window.prompt("Make new grid! How big on the side? (range: 1 - 100)"));
    if (userInput > 100) {
        alert("Number too big! Try again!");
    } else if (userInput <= 0) {
        makeGrid(16);
    } else {
        makeGrid(userInput);
    }
    hoverEffect();
})
