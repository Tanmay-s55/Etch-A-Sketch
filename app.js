// selectable elements
var gridEl = document.querySelector('.grid-container');
var gridColorEl = document.getElementById('color');
var clearEl = document.getElementById('clear');
var eraserEl = document.getElementById('erase');
var defaultEl = document.getElementById('default-input');
var smallEl= document.getElementById('small');
var medEl= document.getElementById('medium');
var largeEl= document.getElementById('large');
var gridColor = "black";

// event listeners
defaultEl.addEventListener('click',() => {
    gridColor = "black";
})
eraserEl.addEventListener('click',() => {
    gridColor = "lightblue";
});

clearEl.addEventListener('click',clearBoard);
gridColorEl.addEventListener('input',(event) => setColor(event));

smallEl.addEventListener('click',(event) => handleSize(event));
medEl.addEventListener('click',(event) => handleSize(event));
largeEl.addEventListener('click',(event) => handleSize(event));

createGrid(16);
activateGrid();

// functions
function handleSize(event){
    if(event.target.id==='small'){
        newGrid(16);
    }else if(event.target.id==='medium'){
        newGrid(32);
    }else{
        newGrid(64);
    }
}
function newGrid(size){
    deleteGrid();
    setGrid(size);
    createGrid(size);
    activateGrid();
}
function setColor(event){
    gridColor = event.target.value;
}

function colorCell(event){
    event.target.style.backgroundColor = gridColor;
}

function activateGrid(){
    var gridCells = document.getElementsByClassName('grid-item');
    for(var i=0;i<gridCells.length;i++){
        gridCells[i].addEventListener('mouseover',(event) => colorCell(event));
    }
}
function createGrid(size){
    for(var i=0;i<size;i++){
        for(var j=0;j<size;j++){
            var gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridEl.appendChild(gridItem);
        }
    }
}
function clearBoard(){
    var gridCells = document.getElementsByClassName('grid-item');
    for(var i=0;i<gridCells.length;i++){
        gridCells[i].style.backgroundColor = 'lightblue';
    }
}

function deleteGrid(){
    while(gridEl.hasChildNodes()){
        gridEl.removeChild(gridEl.firstChild);
    }
}
function setGrid(size){
    gridEl.removeAttribute('id');
    gridEl.id = 'grid-'+size;
}