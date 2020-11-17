let container = document.querySelector('.container');
let div;
let maxSize = 550;
let nCells = 16;
let sizeOfCells;
let penColor = '#000';
let pointColor = '#FF0000';
let counter;

const redpen = document.querySelector('#red-pen');
const blackpen = document.querySelector('#black-pen');
const rainbowPen = document.querySelector('#rainbow-pen');
const pencil = document.querySelector('#pencil')

// Get the size of the grid Cells
function getSizeOfCells(maxSize, nCells) {
  //set up local version of variable
  let sizeOfCells;
  sizeOfCells = maxSize / nCells;
  sizeOfCells = sizeOfCells + 'px';
  return sizeOfCells;
}

// Generating the drawing grid
function makeGrid(nCells) {
  sizeOfCells = getSizeOfCells(maxSize, nCells);

  container.style['grid-template'] =
    `repeat(${nCells}, ${sizeOfCells}) / repeat(${nCells}, ${sizeOfCells})`;

  for (let i = 0; i < nCells; i++) {
    for (let j = 0; j < nCells; j++) {
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
    grid[i].addEventListener('mouseover', function () {
      grid[i].style.backgroundColor = penColor;
    });
  }
  for (let j = 0; j < grid.length; j++) {
    grid[j].addEventListener('mouseover', function () {
      grid[i].style.bckgroundColor = pointColor;
      });
    }
}

// Reset the grid color to white
function clearGrid() {
  for (let i = 0; i < grid.length; i++) {
    grid[i].style.backgroundColor = '#FFF';
  }
}

function clearGrid() {
  for (let j = 0; j < grid.length; j++) {
    grid[j].style.backgroundColor = '#FFF';
  }
}

// creates a new grid with diffrent  sized Cells
function replaceGrid() {
  ncells = prompt('Enter a number between 1 and 50');
  if (nCells > 50 || nCells < 1) {
    if (typeof (nCells) != 'object') {
      alert("that's not Within range");
    }
  } else {
    //Remove old grid
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
    // Establish new grid
    makeGrid(nCells);
    draw();
  }
}

//Randomize colors
function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  penColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  pointColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

// Adds a layer of shade
function shadeColor() {
  counter = this.getAttribute('data-counter');
  counter -= 1;
  this.style.filter = `brightness(${counter * 10}%)`;
  this.setAttribute('data-counter', counter);
}

// switches to black pen when button is clicked
redpen.addEventListener('click', function () {
  for (let j = 0; j < grid.length; j++) {
    grid[j].removeEventListener('mouseover', shadeColor);
    grid[j].removeEventListener('mouseover', getRandomColor);
  }

  pointColor = '#FF0000';
  draw();
});

// Switches to black pen when button is clicked

blackpen.addEventListener('click', function () {
  for (let i = 0; i < grid.length; i++) {
    grid[i].removeEventListener('mouseover', shadeColor);
    grid[i].removeEventListener('mouseover', getRandomColor);
  }

  penColor = '#000';
  draw();
});


//switches to rainbow pen when button is clicked
rainbowPen.addEventListener('click', function () {
  for (let i = 0; i < grid.length; i++) {
    grid[i].removeEventListener('mouseover', shadeColor);
    grid[i].addEventListener('mouseover', getRandomColor);
  }
  draw();
});

// Switches to shade pen when button is clicked
pencil.addEventListener('click', function () {
  counter = 0;
  penColor = 'rgba(250, 250, 250, 1)';

  for (let i = 0; i < grid.length; i++) {
    grid[i].removeEventListener('mouseover', getRandomColor);
    grid[i].addEventListener('mouseover', shadeColor);
  }
  draw();
});

makeGrid(nCells);
draw();
