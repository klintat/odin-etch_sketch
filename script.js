const gridContainer = document.querySelector("#grid-container");
const defaultGridSize = 16;
let isCheckedRGB = false;
let isDrawing = false;
let isCheckedBrightness = false;

const colorRGB = () => {
    let checkboxRGB = document.querySelector("#checkboxRGB");
    checkboxRGB.addEventListener("change", function() {
        isCheckedRGB = this.checked;
    });
}

// Function for making grid layout
const makeGrid = (gridSize) => {

    // Function to reset grid
    const resetGrid = (parent) => {
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    resetGrid(gridContainer);

    // Loop to make the grid
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

makeGrid(defaultGridSize);

// Function for the hover effect
const hoverEffect = () => {
    //Function to get random RGB color on hovering cell
    const getRGBColor = () => {
        return Math.floor(Math.random() * 256);
    };

    [...document.getElementsByClassName("cell")].forEach(cell => {
        cell.addEventListener("mousedown", function() {
            isDrawing = true;
        });
        cell.addEventListener("mouseup", function() {
            isDrawing = false;
        });
        cell.addEventListener("mouseover", function() {
            if(isDrawing) {
                if (isCheckedRGB) {
                    const randomRed = getRGBColor();
                    const randomGreen = getRGBColor();
                    const randomBlue = getRGBColor();
                    this.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
                } else {
                    this.style.backgroundColor = `rgb(0, 0, 0`;
                }
            }
        })
    });
}

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
})

colorRGB();
hoverEffect();