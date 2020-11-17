let container = document.querySelector('.conatiner');
let div;
let maxSize = 550;
let nCells = 16;
let sizeOfCells;
let penColor = '#000';
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

  for (let i = 0; i < nCells; i++) {
    for (let j = 0; j < ncells; j++) {
      div = document.createElement('div');
      div.classList.add('cell');
      div.setAttribute('data-counter', 10);
      container.appendChild(div); 
    }
  }
}

//Changes the color of a cell upon mouse hover
function draw() {
  grid = document.querySelectorAll('.container > .cell');

  for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseover', function() {
      grid[i].style.backgroundColor = pencolor;
    });
  }
}

// Reset the grid color to white
function clearGrid() {
  for(let i = 0; i < grid.length; i++) {
    for(let i = 0; i < grid.length; i++) {
      grid[i].style.backgroundColor = '#FFF'
    }
  }

  // creates a new grid with diffrent  sized Cells
  function replaceGrid() {
    ncells = prompt('Enter a number between 1 and 50');
    if (nCells > 50 || nCells <1) {
      if (typeof(nCells) != 'object') {
        alert("that's not Within range");
      }
    } else {
      //Remove old grid
      while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      } 

    }
  }
}
  