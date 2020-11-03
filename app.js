 const container = document.querySelector('.container');
const originalGrid = 16;
let newGrid = document.querySelector('#resize');
let blankGrid = document.querySelector('#reset');
let blackSquare = document.querySelector('#black');
let shadeSquare = document.querySelector('#shade');
let colorfulSquare = document.querySelector('#random');
let playerInput;
let cellNumber;

        // create 16x16 grid on page load
        const gridArea = document.getElementById("grid-area");

        function createGrid(rows, columns) {
            gridArea.style.setProperty("--grid-rows", rows);
            gridArea.style.setProperty("--grid-columns", columns);
            for (c = 0; c < (rows * columns); c++) {
                let cell = document.createElement("div");
                gridArea.appendChild(cell).className = "grid-item";
                gridArea.appendChild(cell).setAttribute("id", "grid-cell");
            };
            redShades();
        };

        createGrid(16, 16);

        // get modal 
        let modal = document.getElementById("reset-modal");

        // get button to open modal
        let resetLink = document.getElementById("reset-link");

        // get cancel button
        let cancelButton = document.getElementById("cancel-button");

        // get submit button
        let submitButton = document.getElementById("submit-button");

        // function to open modal
        resetLink.onclick = function() {
            modal.style.display = "block";
        }

        // function to close modal
        cancelButton.onclick = function() {
            modal.style.display = "none";
        }

        // function to re-size grid
        submitButton.onclick = function() {
            gridArea.innerHTML = "";
            let sliderValue = slider.value;
            createGrid(sliderValue, sliderValue);
            sliderOutput.innerHTML = `Current grid size: ${sliderValue}x${sliderValue}`;
            modal.style.display = "none";
        }

        // display slider value
        let slider = document.getElementById("gridRange");
        let sliderOutput = document.getElementById("newGridSize");

        sliderOutput.innerHTML = `Current grid size: 16x16`;

        slider.oninput = function() {
            sliderOutput.innerHTML = `New grid size: ${this.value}x${this.value}`;
        }

        // event listeners to change div color on hover
        function redShades() {
            let items = document.querySelectorAll(".grid-item");
            items.forEach(item => {
                let baseShade = 0;
                let redColor = 255;
                item.addEventListener("mouseover", () => {
                    redColor -= 25;
                    item.style.backgroundColor = `rgb(${redColor}, ${baseShade}, ${baseShade})`;
                });
            });
        }

   
