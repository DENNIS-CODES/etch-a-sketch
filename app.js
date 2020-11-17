let container = document.querySelector('.conatiner');
let div;
let maxSize = 550;
let nCells = 16;
let sizeOfCells;
let penColor = '#000' '#FF0000';
let counter;

const redpen = document.querySelector('#red-pen');
const black = document.querySelector('#black-pen');
const rainbowPen = document.querySelector('#rainbow-pen');
const pencil = document.querySelector('#pencil')

// Get the size of the grid Cells
function getSizeOfCells(maxSize, nCells) {
  //set up local version of variable
  let sizeOfCells;
  sizeOfCells =  maxSize / nCells;
  sizeOfCells = sizeOfCells + 'px';
  return sizeOfCells;
}

//Generating the grid drawing 
function makeGrid(nCells) {
  sizeOfCells = getSizeOfcells(maxSize, nCells);

  container.style['grid-template'] =
  `repeat(${nCells}, ${sizeOfCells}) / repeat(${nCells}, ${sizeOfCells})`;

  for (let i = 0; < nCells; i++) {
    for (let j = 0; j < ncells; j++) {
      div = document.createElement('div');
      div.classList.add('cell');
      div.setAttribute('data-counter', 10);
      container.appendChild(div); 
    }
  }
}

//Changes the color of a cell upon mouse hover


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

   
